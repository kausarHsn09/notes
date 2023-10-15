import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    note:[{
    title : '',
    description : '',
    task : [],
    reminder: false,
    archive:false,
    }]
}

const noteSlice = createSlice({
    name:'note',
    initialState,
    reducers:{
       addNotes(state,action){
        state.note.push(action.payload) 
       }
    }
})


export const {addNotes } = noteSlice.actions 
export default noteSlice.reducer