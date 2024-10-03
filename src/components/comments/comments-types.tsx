export interface CommentsCardProps {
  postId: number;
  body: string;
  user: {
    fullName: string;
    username: string;
  };
  likes: number;
}
