import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-grey w-full h-[100px] flex justify-center	items-center">
      <div className="flex w-[1570px]">
        <div className="w-[240px]">
        <Link to='/'> <h2 className="text-[32px] font-bold text-left ">Notes</h2></Link> 
        </div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
