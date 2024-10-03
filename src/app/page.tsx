"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import CommentsList from "../components/comments/comments-list";

export default function HomePage() {
  return (
    <Provider store={store}>
      <CommentsList />
    </Provider>
  );
}
