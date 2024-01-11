import ReactMarkdown from "react-markdown";
import { ProtectedRoute } from "../../components/protected";

export default async function ReviewMemoPage() {
  const contentHtml = "# Hello World!";
  return (
    <ProtectedRoute>
      <div>
        <h1>Review Memo</h1>
        <ReactMarkdown>{contentHtml}</ReactMarkdown>
      </div>
    </ProtectedRoute>
  );
}
