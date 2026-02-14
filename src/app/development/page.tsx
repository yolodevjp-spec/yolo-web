import ArticleList from "@/components/ArticleList";
import PageLayout from "@/components/PageLayout";
import articlesData from "@/data/articles.json";
import { Article } from "@/types/article";

export default function DevelopmentPage() {
  const articles = articlesData.development as Article[];

  return (
    <PageLayout title="開発">
      <ArticleList articles={articles} />
    </PageLayout>
  );
}
