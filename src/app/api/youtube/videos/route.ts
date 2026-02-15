import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type YTVideo = {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  publishedAt: string;
  channelId: string;
  channelTitle: string;
};

export async function GET() {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) {
    return NextResponse.json({ videos: [], message: "YOUTUBE_API_KEY not set" });
  }

  try {
    const publishedAfter = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search");
    searchUrl.searchParams.set("part", "snippet");
    searchUrl.searchParams.set("type", "video");
    searchUrl.searchParams.set("publishedAfter", publishedAfter);
    searchUrl.searchParams.set("regionCode", "JP");
    searchUrl.searchParams.set("maxResults", "50");
    searchUrl.searchParams.set("order", "viewCount");
    searchUrl.searchParams.set("key", key);

    const searchRes = await fetch(searchUrl.toString());
    if (!searchRes.ok) throw new Error("search failed");
    const searchData = (await searchRes.json()) as {
      items?: { id?: { videoId?: string }; snippet?: { channelId?: string; channelTitle?: string; publishedAt?: string } }[];
    };
    const items = searchData.items ?? [];
    const videoIds = items.map((i) => i.id?.videoId).filter(Boolean) as string[];
    if (videoIds.length === 0) return NextResponse.json({ videos: [] });

    const statsUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
    statsUrl.searchParams.set("part", "statistics,snippet");
    statsUrl.searchParams.set("id", videoIds.slice(0, 50).join(","));
    statsUrl.searchParams.set("key", key);
    const statsRes = await fetch(statsUrl.toString());
    if (!statsRes.ok) throw new Error("videos list failed");
    const statsData = (await statsRes.json()) as {
      items?: {
        id: string;
        statistics?: { viewCount?: string; likeCount?: string; commentCount?: string };
        snippet?: { title?: string; thumbnails?: { medium?: { url?: string }; high?: { url?: string }; default?: { url?: string } }; channelId?: string; channelTitle?: string; publishedAt?: string };
      }[];
    };

    const videos: YTVideo[] = (statsData.items ?? []).map((v) => {
      const viewCount = Number(v.statistics?.viewCount ?? 0);
      const commentCount = Number(v.statistics?.commentCount ?? 0);
      const thumb = v.snippet?.thumbnails?.high?.url ?? v.snippet?.thumbnails?.medium?.url ?? v.snippet?.thumbnails?.default?.url ?? "";
      return {
        id: v.id,
        title: v.snippet?.title ?? "",
        thumbnailUrl: thumb,
        viewCount,
        likeCount: Number(v.statistics?.likeCount ?? 0),
        commentCount,
        publishedAt: v.snippet?.publishedAt ?? "",
        channelId: v.snippet?.channelId ?? "",
        channelTitle: v.snippet?.channelTitle ?? "",
      };
    });

    const commentRateMin = 0.004;
    const filtered = videos.filter((v) => {
      const commentRate = v.viewCount > 0 ? v.commentCount / v.viewCount : 0;
      const efficiency = v.viewCount / Math.max(1000, v.viewCount * 0.1);
      return commentRate >= commentRateMin || (v.viewCount >= 100000 && efficiency >= 0.03);
    });

    return NextResponse.json({ videos: filtered.slice(0, 30), total: filtered.length });
  } catch (e) {
    console.error("YouTube videos API error:", e);
    return NextResponse.json({ videos: [], error: String(e) });
  }
}
