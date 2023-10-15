import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "./noteSlice";

import { useSelector } from "react-redux";
import { AiOutlineBell, AiOutlinePlus } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { BiLabel } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";

const CreateNotes = () => {
  
  const [ntitle, setnTitle] = useState("");
  const [ndescription, setnDescription] = useState("");
  const [ntask, setnTask] = useState("");
  const [nreminder, setnReminder] = useState(false);
  const [nachive, setnArchive] = useState(false);

  const [isCollapse, setIsCollapse] = useState(false);
  const [taskCollapse, setTaskCollapse] = useState(false);
  const Noteref = useRef(null);
  const addtaskRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("click", outsideClick, true);
  }, []);

  function handleClick() {
    setIsCollapse(true);
  }

  useEffect(() => {
    if (taskCollapse) {
      addtaskRef.current.focus();
    }
  }, [taskCollapse]);

  function outsideClick(e) {
    const element = e.target;
    if (Noteref.current && !Noteref.current.contains(element)) {
      setIsCollapse(false);
      setTaskCollapse(false);
    }
  }

  function handleSubmit(e) {

    const newNotes = {
    title : ntitle,
    description : ndescription,
    reminder: nreminder,
    archive:nachive,
    task : ntask,
    }

    dispatch(addNotes(newNotes));

 
    setnTitle("");
    setnDescription("");
    setnTask("");
    setnReminder(false);
    setnArchive(false);
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
            <div className="w-full">
              <input
                className="w-full outline-none font-inter font-semibold text-[14px]"
                type="text"
                placeholder="Title"
                value={ntitle}
                name="title"
                onChange={(e) => setnTitle(e.target.value)}
              />
              <textarea
                placeholder="Take note"
                className="w-full font-inter  mt-4 outline-none text-[14px]"
                cols="5"
                rows="5"
                value={ndescription}
                name="description"
                onChange={(e) => setnDescription(e.target.value)}
              ></textarea>

              {taskCollapse && (
                <div className="w-full ">
                  <button className="text-[12px] text-black">
                    <AiOutlinePlus />
                  </button>
                  <input
                    ref={addtaskRef}
                    name="task"
                    value={ntask}
                    onChange={(e) => setnTask(e.target.value)}
                    className="outline-none ml-2"
                    type="text"
                  />
                </div>
              )}
              <div className="w-full flex justify-between items-center mt-2">
                <div className="note_creator_icons flex flex-row justify-evenly items-center">
                  <button
                    name="reminder"
                    onClick={() => setnReminder(true)}
                    aria-label="Reminder"
                  >
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
                  <button
                    name="archive"
                    onClick={() => setnArchive(true)}
                    aria-label="Archive"
                  >
                    <BsArchive />
                  </button>
                </div>
                <div>
                  <button
                    className="bg-blue px-2 py-2 rounded-lg text-white font-inter"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateNotes;
