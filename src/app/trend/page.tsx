import ArticleList from "@/components/ArticleList";
import PageLayout from "@/components/PageLayout";
import articlesData from "@/data/articles.json";
import { Article } from "@/types/article";

export default function TrendPage() {
  const articles = articlesData.trend as Article[];

  return (
    <PageLayout title="トレンド">
      <ArticleList articles={articles} />
    </PageLayout>
  );
}
