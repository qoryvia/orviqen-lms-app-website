// src/lib/axios/axios.instance.ts

import axios from "axios";
import { axiosConfig } from "./axios.config";

export const apiClient = axios.create({
  ...axiosConfig,
});

export const authRefreshClient = axios.create({
  ...axiosConfig,
});