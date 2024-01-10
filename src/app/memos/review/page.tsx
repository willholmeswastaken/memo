import ReactMarkdown from "react-markdown";

export default async function ReviewMemoPage() {
  const contentHtml = "# Hello World!";
  return (
    <div>
      <h1>Review Memo</h1>
      <ReactMarkdown>{contentHtml}</ReactMarkdown>
    </div>
  );
}
