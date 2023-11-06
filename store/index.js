import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import scheduleReducer from "./scheduleSlice";

const store = configureStore({
  reducer: { user: userReducer, schedule: scheduleReducer },
});

export default store;
