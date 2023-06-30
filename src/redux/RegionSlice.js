import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedRegion: {
		id: 1,
		name: "All",
		value: "all",
	},
};

const regionSlice = createSlice({
	name: "region",
	initialState,
	reducers: {
		updateRegion: (state, action) => {
			state.selectedRegion = action.payload;
		},
	},
});

export const updateRegion = regionSlice.actions.updateRegion;

export default regionSlice.reducer;
