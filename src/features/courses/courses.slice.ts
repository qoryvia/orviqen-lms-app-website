// features/courses/courses.slice.ts

import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { fetchCourses } from "./courses.thunks";

interface Course {
  id: string;
  title: string;
  slug: string;
}

interface CoursesState {
  items: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  items: [],
  loading: false,
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,

  reducers: {
    clearCourses: (state) => {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        fetchCourses.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )

      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) ||
          "Something went wrong";
      });
  },
});

export const { clearCourses } = coursesSlice.actions;

export default coursesSlice.reducer;