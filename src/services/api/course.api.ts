// services/api/course.api.ts

import { apiClient } from "@/lib/axios";

export const courseApi = {
  getCourses: async () => {
    const response = await apiClient.get("/courses");

    return response.data;
  },

  getCourseBySlug: async (slug: string) => {
    const response = await apiClient.get(`/courses/${slug}`);

    return response.data;
  },
};