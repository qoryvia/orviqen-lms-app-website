// features/courses/courses.thunks.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { courseApi } from "@/services/api/course.api";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      return await courseApi.getCourses();
    } catch (error) {
      return rejectWithValue("Failed to fetch courses");
    }
  }
);