"use client";

import StoreProvider from "./StoreProvider";
import CommentsContent from "../components/CommentsContent";

export default function HomePage() {
  return (
    <StoreProvider>
      <CommentsContent />
    </StoreProvider>
  );
}
