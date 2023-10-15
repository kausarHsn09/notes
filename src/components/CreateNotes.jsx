import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { title,description,task,archive,reminder } from "./noteSlice";

import { AiOutlineBell, AiOutlinePlus } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { BiLabel } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";

const CreateNotes = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [taskCollapse, setTaskCollapse] = useState(false);
  const Noteref = useRef(null);
  const addtaskRef = useRef(null)
  
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener("click", outsideClick, true);
  }, []);

  function handleClick() {
    setIsCollapse(true);
  }

  useEffect(()=>{
    if(taskCollapse){
      addtaskRef.current.focus()
    }
  },[taskCollapse])

  function outsideClick(e) {
    const element = e.target;
    if (Noteref.current && !Noteref.current.contains(element)) {
      setIsCollapse(false);
      setTaskCollapse(false);
    }
  }
 
  function handleSubmit(e) {
    e.preventDefault();
  }
  
  return (
    <>
      {!isCollapse && (
        <div className="w-full flex justify-center" onClick={handleClick}>
          <div className="notes_creator cursor-text px-9 py-3 mt-10 bg-white rounded-[20px] flex flex-row w-[515px] h-auto">
            <p className="font-inter text-[#6b7280] text-md ">Take a note </p>
          </div>
        </div>
      )}
      {isCollapse && (
        <div className="w-full flex justify-center">
          <div
            ref={Noteref}
            className="notes_creator cursor-text px-9 py-5 mt-10 bg-white rounded-[20px]  w-[515px] h-auto"
          >
            <form className="w-full" onSubmit={handleSubmit}>
              <input
                className="w-full outline-none font-inter font-semibold text-[14px]"
                type="text"
                placeholder="Title"
                onChange={(e)=>dispatch(title(e.target.value))}
              />
              <textarea
                placeholder="Take note"
                className="w-full font-inter  mt-4 outline-none text-[14px]"
                cols="5"
                rows="5"
                onChange={(e)=>dispatch(description(e.target.value))}
              ></textarea>

              {taskCollapse && (
                <div className="w-full ">
                  <button className="text-[12px] text-black">
                    <AiOutlinePlus />
                  </button>
                  <input 
                  ref={addtaskRef}
                  onChange={(e)=>dispatch(task(e.target.value))}
                  className="outline-none ml-2" type="text" />
                </div>
              )}
              <div className="w-full flex justify-between items-center mt-2">
                <div className="note_creator_icons flex flex-row justify-evenly items-center">
                  <button onClick={()=>dispatch(reminder(true))} aria-label="Reminder">
                    <AiOutlineBell />
                  </button>
                  <button
                    onClick={() => setTaskCollapse(true)}
                    aria-label="Add task"
                  >
                    <BsPencilSquare />
                  </button>
                  <button aria-label="Change label">
                    <BiLabel />
                  </button>
                  <button onClick={()=>dispatch(archive(true))} aria-label="Archive">
                    <BsArchive />
                  </button>
                </div>
                <div>
                  <button
                    className="bg-blue px-2 py-2 rounded-lg text-white font-inter"
                    type="submit"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateNotes;
