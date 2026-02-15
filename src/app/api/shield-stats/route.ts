import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const ATMOSPHERE_KANJI = ["熱", "静", "変", "沸", "渦", "波", "昇", "沈", "爆", "流"] as const;

function getAtmosphereFromTrend(new24h: number, over100k: number): string {
  const ratio = new24h > 0 ? over100k / new24h : 0;
  if (ratio > 0.15) return "沸";
  if (ratio > 0.08) return "熱";
  if (new24h > 100) return "波";
  const i = (new Date().getHours() + new Date().getDate()) % ATMOSPHERE_KANJI.length;
  return ATMOSPHERE_KANJI[i];
}

export async function GET() {
  const key = process.env.YOUTUBE_API_KEY;
  let new24h = 0;
  let over100k = 0;

  if (!key) {
    const t = Date.now() / 60000;
    new24h = Math.floor(30 + (t % 40));
    over100k = Math.floor(10 + (t % 25));
  } else {
    try {
      const publishedAfter = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search");
      searchUrl.searchParams.set("part", "snippet");
      searchUrl.searchParams.set("type", "video");
      searchUrl.searchParams.set("publishedAfter", publishedAfter);
      searchUrl.searchParams.set("regionCode", "JP");
      searchUrl.searchParams.set("maxResults", "50");
      searchUrl.searchParams.set("order", "date");
      searchUrl.searchParams.set("key", key);

      const searchRes = await fetch(searchUrl.toString());
      if (!searchRes.ok) throw new Error("search failed");
      const searchData = (await searchRes.json()) as {
        items?: { id?: { videoId?: string } }[];
        pageInfo?: { totalResults?: number };
      };
      const items = searchData.items ?? [];
      const videoIds = items.map((i) => i.id?.videoId).filter(Boolean) as string[];
      new24h = searchData.pageInfo?.totalResults ?? videoIds.length;

      if (videoIds.length > 0) {
        const statsUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
        statsUrl.searchParams.set("part", "statistics");
        statsUrl.searchParams.set("id", videoIds.slice(0, 50).join(","));
        statsUrl.searchParams.set("key", key);
        const statsRes = await fetch(statsUrl.toString());
        if (statsRes.ok) {
          const statsData = (await statsRes.json()) as {
            items?: { statistics?: { viewCount?: string } }[];
          };
          const list = statsData.items ?? [];
          over100k = list.filter((v) => Number(v.statistics?.viewCount ?? 0) >= 100000).length;
        }
      }
    } catch (e) {
      console.error("YouTube API error:", e);
      const t = Date.now() / 60000;
      if (new24h === 0) new24h = Math.floor(20 + (t % 30));
      if (over100k === 0) over100k = Math.floor(5 + (t % 20));
    }
  }

  const atmosphere = getAtmosphereFromTrend(new24h, over100k);

  return NextResponse.json({
    new24h,
    over100k,
    atmosphere,
  });
}
