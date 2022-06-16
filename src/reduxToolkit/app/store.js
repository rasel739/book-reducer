import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/postSlice/postSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    postReducer,
  },
});

export default store;
