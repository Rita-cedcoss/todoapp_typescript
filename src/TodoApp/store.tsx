import { configureStore } from "@reduxjs/toolkit";
import todoSliceRedducer from "./todoSlice";
export const store=configureStore({
   reducer: {todoSliceRedducer}
})