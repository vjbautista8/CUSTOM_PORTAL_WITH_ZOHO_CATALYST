import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  CRM_ID: '',
};
// export const searchRecord = createAsyncThunk(
//   'user/searchRecord',
//   async (data, thunkAPI) => {
//     try {
//       const response = ZOHO.CRM.API.searchRecord({
//         Entity: data.Entity,
//         Type: 'criteria',
//         Query: data.Query, //'(Company:equals:Zoho)',
//       });

//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response);
//     }
//   }
// );
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
export const {} = userSlice.actions;
export default userSlice.reducer;
