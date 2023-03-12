import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "app",
	initialState: {
		firstName: "",
		middleName: "",
		lastName: "",
		mobileNo: "",
		email: "",
		birthday: "",
		age: "",
		bloodGroup: "",
		height: "",
		weight: "",
		gender: "",
		maritalState: "",
		addressLine1: "",
		addressLine2: "",
		city: "",
		state: "",
		country: "",
		pincode: "",
	},
	reducers: {
		updateState: (state, action) => {
			state[action.payload.type] = action.payload.value;
		},
	},
});

export const { updateState } = appSlice.actions;
export default appSlice.reducer;
