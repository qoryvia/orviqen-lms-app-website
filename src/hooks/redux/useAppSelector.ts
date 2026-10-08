// src/hooks/redux/useAppSelector.ts

import { useSelector } from "react-redux";

import type { RootState } from "@/lib/redux/store";

export const useAppSelector =
  useSelector.withTypes<RootState>();