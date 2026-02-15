export function simpleMarkdownToHtml(md: string): string {
  let html = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/^### (.+)$/gm, "<h3 class=\"text-lg font-bold mt-6 mb-2\">$1</h3>")
    .replace(/^## (.+)$/gm, "<h2 class=\"text-xl font-bold mt-8 mb-3\">$1</h2>")
    .replace(/^# (.+)$/gm, "<h1 class=\"text-2xl font-bold mt-6 mb-4\">$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n\n+/g, "</p><p class=\"mb-4 leading-relaxed\">")
    .replace(/\n/g, "<br/>");
  return "<p class=\"mb-4 leading-relaxed\">" + html + "</p>";
}
