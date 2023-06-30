import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./RegionSlice";

const store = configureStore({
	reducer: {
		region: regionReducer,
	},
});

export default store;
