import { createSlice } from "@reduxjs/toolkit";
import { getDateFn } from "@/utils/transformDateFnList";

const currentTime = new Date();
const sevenDaysLater = new Date(
  currentTime.getTime() + 6 * 24 * 60 * 60 * 1000
); // Cộng thêm 6 ngày - Trong JS thoi gian tinh bang ms

const currentTimeFormated = getDateFn(currentTime);
const sevenDaysLaterFormated = getDateFn(sevenDaysLater);

const initialUserState = {
  //   dateArrive: currentTime,
  //   returnDate: new Date(currentTime.getTime() + 7 * 24 * 60 * 60 * 1000), // Cộng thêm 7 ngày - Trong JS thoi gian tinh bang ms
  dateArrive: currentTimeFormated,
  returnDate: sevenDaysLaterFormated, // Cộng thêm 7 ngày
  name: "",
  phone: "",
  email: "",
  specifiedHour: "",
  delayHour: "",
  location: "",
};

const userSlice = createSlice({
  name: "userData",
  initialState: initialUserState,
  reducers: {
    setUserData(state, action) {
      state.dateArrive = action.payload.dateArrive;
      state.returnDate = action.payload.returnDate;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.specifiedHour = action.payload.specifiedHour;
      state.delayHour = action.payload.delayHour;
      state.location = action.payload.location;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
