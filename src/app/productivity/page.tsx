import ArticleList from "@/components/ArticleList";
import PageLayout from "@/components/PageLayout";
import articlesData from "@/data/articles.json";
import { Article } from "@/types/article";

export default function ProductivityPage() {
  const articles = articlesData.productivity as Article[];

  return (
    <PageLayout title="生産性">
      <ArticleList articles={articles} />
    </PageLayout>
  );
}
