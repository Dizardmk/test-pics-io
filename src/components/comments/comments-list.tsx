import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Comment } from "../../store/comments/comments-types";
import { fetchComments } from "../../store/comments/comments-slice";
import CommentsLoader from "./comments-loader";
import CommentsCard from "./comments-card";

export default function CommentsList() {
  const comments = useAppSelector((state) => state.comments.comments);
  const status = useAppSelector((state) => state.comments.status);
  const error = useAppSelector((state) => state.comments.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchComments());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <CommentsLoader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl my-4 ml-4">Comments</h1>

      <ul className="flex flex-wrap gap-4 p-4 items-center justify-center">
        {comments.map((comment: Comment) => (
          <CommentsCard key={comment.id} {...comment} />
        ))}
      </ul>
    </div>
  );
}
