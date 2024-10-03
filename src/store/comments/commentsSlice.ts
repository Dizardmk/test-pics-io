import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CommentsState, Comment } from "./commentsTypes";

const initialState: CommentsState = {
  comments: [],
  status: "idle",
  error: null,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch("https://dummyjson.com/comments");
    const data = await response.json();
    return data.comments;
  },
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    initializeComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
      state.status = "succeeded";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch comments";
      });
  },
});

export const { initializeComments } = commentsSlice.actions;

export default commentsSlice.reducer;
