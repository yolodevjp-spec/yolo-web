import ArticleList from "@/components/ArticleList";
import PageLayout from "@/components/PageLayout";
import articlesData from "@/data/articles.json";
import { Article } from "@/types/article";

export default function HRPage() {
  const articles = articlesData.hr as Article[];

  return (
    <PageLayout title="人事">
      <ArticleList articles={articles} />
    </PageLayout>
  );
}
