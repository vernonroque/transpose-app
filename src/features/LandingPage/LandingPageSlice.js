import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchPDF} from './LandingPageAPI';

const initialState= {
    value:'',
    status:'idle'
}

// The function below is called a thunk and allows us to perform async logic. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const submitPDF = createAsyncThunk(
    'LandingPage/sendPDF',
    async (value) => {
      console.log('I am in the thunk');
        const response = await fetchPDF(value);
        console.log(response);
        const jsonResponse = await response.json();
      // The value we return becomes the `fulfilled` action payload
      console.log('the json response>>>',jsonResponse);
      return jsonResponse;
    }
  );

export const LandingPage = createSlice({
    name:'LandingPage',
    initialState,
    reducers:{
        loadPDF: (state,action) =>{
            state.value = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(submitPDF.pending, (state) => {
            state.status = 'loading';
          })
        .addCase(submitPDF.fulfilled, (state, action) => {
            state.status = 'success';
            console.log(action.payload.message);
            state.value = action.payload.message;
          })
        .addCase(submitPDF.rejected,(state)=>{
            state.status = 'error';
        })
    }
});
export const {loadPDF } = LandingPage.actions;

export const selectLandingPage = (state) => state.LandingPage;

export default LandingPage.reducer;

