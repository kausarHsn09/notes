import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div className="flex flex-col justify-start items-center w-[240px] h-full relative bg-white pt-10 border-r-[1px] border-[#e2e8f0]">
        <Link to="/notes">Notes</Link>
        <Link to="/notes/reminders">Reminders</Link>
        <Link to="/notes/archives">Archives</Link>
        <button>Edit Label</button>
      </div>
    </aside>
  );
};

export default Sidebar;
