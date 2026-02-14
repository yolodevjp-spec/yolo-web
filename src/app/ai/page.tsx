import ArticleList from "@/components/ArticleList";
import PageLayout from "@/components/PageLayout";
import articlesData from "@/data/articles.json";
import { Article } from "@/types/article";

export default function AIPage() {
  const articles = articlesData.ai as Article[];

  return (
    <PageLayout title="AI">
      <ArticleList articles={articles} />
    </PageLayout>
  );
}
