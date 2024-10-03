import { useAppSelector } from "../hooks/hooks";
import { Comment } from "../store/comments/commentsTypes";

export default function CommentsList() {
  const comments = useAppSelector((state) => state.comments?.comments ?? []);
  const status = useAppSelector((state) => state.comments?.status ?? "idle");
  const error = useAppSelector((state) => state.comments?.error ?? null);

  if (status === "loading") {
    return <div>Loading comments...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment: Comment) => (
          <li key={comment.id}>
            <p>{comment.body}</p>
            <p>By: {comment.user.username}</p>
            <p>Likes: {comment.likes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
