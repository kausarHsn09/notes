import React from 'react'
import CreateNotes from './CreateNotes'
import Note from './Note'
import { Outlet } from 'react-router-dom'
const Notes = () => {
  return (
    <div className='w-[1370px] bg-white p-10 '>
      <div className='w-full  h-full overflow-y-scroll	 bg-grey rounded-[10px] border-[1px] border-[#e2e8f0]'>
      <CreateNotes/>
      <Note/>
      <Outlet/>
      </div>
    </div>
  )
}

export default Notes