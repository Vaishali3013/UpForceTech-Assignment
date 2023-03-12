import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import errorSlice from "./errorSlice";

const store = configureStore({
	reducer: {
        app: appSlice,
        error: errorSlice
	},
});

export default store;