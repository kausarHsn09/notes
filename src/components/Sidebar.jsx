import { Link } from "react-router-dom";
import { BsPencilSquare, BsArchive, BsPencil } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { BiLabel } from "react-icons/bi";
const Sidebar = () => {
  return (
    <aside>
      <div className="sideBar-Container flex flex-col justify-start items-start w-[240px] h-full relative bg-white pt-10 pl-10 border-r-[1px] border-[#e2e8f0] ">
        <Link to="/notes">
          {" "}
          <span>
            <BsPencilSquare />{" "}
          </span>{" "}
          Notes
        </Link>
        <Link to="/notes/reminders">
          {" "}
          <span>
            <AiOutlineBell />
          </span>{" "}
          Reminders
        </Link>
        <Link to="/notes/archives">
          {" "}
          <span>
            <BsArchive />
          </span>{" "}
          Archives
        </Link>
        <Link to="/notes/label/12">
          {" "}
          <span>
            <BiLabel />
          </span>{" "}
          Label
        </Link>
        <button>
          {" "}
          <span>
            <BsPencil />
          </span>{" "}
          Edit Label
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
