"use client";

import StoreProvider from "./StoreProvider";
import CommentsList from "../components/CommentsList";

export default function HomePage() {
  return (
    <StoreProvider>
      <CommentsList />
    </StoreProvider>
  );
}
