"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import CommentsList from "../components/CommentsList";

export default function HomePage() {
  return (
    <Provider store={store}>
      <CommentsList />
    </Provider>
  );
}
