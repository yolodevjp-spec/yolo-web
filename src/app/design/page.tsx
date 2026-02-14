import ArticleList from "@/components/ArticleList";
import PageLayout from "@/components/PageLayout";
import articlesData from "@/data/articles.json";
import { Article } from "@/types/article";

export default function DesignPage() {
  const articles = articlesData.design as Article[];

  return (
    <PageLayout title="デザイン">
      <ArticleList articles={articles} />
    </PageLayout>
  );
}
