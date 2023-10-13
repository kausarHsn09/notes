import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
const AppLayout = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-grey w-full">
      <Header />
      <div className="w-full flex justify-center">
      <div className="w-[1570px] h-[calc(100vh-160px)]  rounded-b-lg flex flex-auto justify-center">
        <Sidebar />
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default AppLayout;
