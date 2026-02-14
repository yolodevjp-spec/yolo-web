import ArticleList from "@/components/ArticleList";
import PageLayout from "@/components/PageLayout";
import articlesData from "@/data/articles.json";
import { Article } from "@/types/article";

export default function SalesPage() {
  const articles = articlesData.sales as Article[];

  return (
    <PageLayout title="営業">
      <ArticleList articles={articles} />
    </PageLayout>
  );
}
