import { createSlice } from "@reduxjs/toolkit";

const initialScheduleState = {
  scheduleStatus: false,
  count: 0,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: initialScheduleState,
  reducers: {
    toggleScheduleStatus(state) {
      state.scheduleStatus = !state.scheduleStatus;
    },
    add(state) {
      state.count++;
    },
  },
});

export const scheduleActions = scheduleSlice.actions;

export default scheduleSlice.reducer;
