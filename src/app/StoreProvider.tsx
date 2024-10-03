"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../store/store";
import { initializeComments } from "../store/comments/commentsSlice";
import { Comment } from "../store/comments/commentsTypes";

export default function StoreProvider({
  comments = [],
  children,
}: {
  comments?: Comment[];
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeComments(comments));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
