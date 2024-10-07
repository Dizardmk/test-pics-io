import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { ThumbsUp } from "lucide-react";
import { CommentsCardProps as CommentsCardProps } from "./comments-types";

export default function CommentsCard({
  postId,
  body,
  user,
  likes,
}: CommentsCardProps) {
  return (
    <li className="min-w-80">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarFallback>{user.fullName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">{user.fullName}</p>
            <p className="text-xs text-muted-foreground">@{user.username}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-2">{body}</p>
          <p className="text-xs text-muted-foreground">Post ID: {postId}</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <ThumbsUp className="w-4 h-4 mr-2" />
            {likes}
          </Button>
        </CardFooter>
      </Card>
    </li>
  );
}
