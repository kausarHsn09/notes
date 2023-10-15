import { createSlice } from "@reduxjs/toolkit";

const randomId =  Math.floor(Math.random()*200)

const initialState = {
    note:[{
    title : '',
    description : '',
    reminder: false,
    archive:false,
    task : '',
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