import ArticleList from "@/components/ArticleList";
import PageLayout from "@/components/PageLayout";
import articlesData from "@/data/articles.json";
import { Article } from "@/types/article";

export default function MarketingPage() {
  const articles = articlesData.marketing as Article[];

  return (
    <PageLayout title="マーケティング">
      <ArticleList articles={articles} />
    </PageLayout>
  );
}
