import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: JSON.parse(localStorage.getItem('names')) || [], 
};

const namesSlice = createSlice({
  name: 'names',
  initialState,
  reducers: {
    addName: (state, action) => {
      state.list.push(action.payload); 
      localStorage.setItem('names', JSON.stringify(state.list)); 
    },
    delName: (state, action) => {
      state.list = state.list.filter((name, index) => index !== action.payload); 
      localStorage.setItem('names', JSON.stringify(state.list)); 
    },
    
  },
});

export const { addName, delName } = namesSlice.actions; 
export default namesSlice.reducer; 
