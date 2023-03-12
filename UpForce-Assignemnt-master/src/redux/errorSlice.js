import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
	name: "error",
	initialState: {
		userInformationClicked: false,
	},
	reducers: {
		updateError: (state, action) => {
			state.userInformationClicked = action.payload;
		},
	},
});

export const { updateError } = errorSlice.actions;
export default errorSlice.reducer;