import ArticleList from "@/components/ArticleList";
import PageLayout from "@/components/PageLayout";
import articlesData from "@/data/articles.json";
import { Article } from "@/types/article";

export default function FinancePage() {
  const articles = articlesData.finance as Article[];

  return (
    <PageLayout title="財務">
      <ArticleList articles={articles} />
    </PageLayout>
  );
}
