import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title : '',
    description : '',
    reminder: false,
    archive:false,
    task : '',
}

const noteSlice = createSlice({
    name:'note',
    initialState,
    reducers:{
       title(state,action){
        state.title = action.title
       },
       description(state,action){
        state.description = action.description
       },
       task(state,action){
        state.task = action.task
       },
       reminder(state,action){
        state.reminder = action.payload
       },
       archive(state,action){
        state.archive = action.payload
       }
    }
})


export const { title ,description,task,reminder,archive } = noteSlice.actions 
export default noteSlice.reducer