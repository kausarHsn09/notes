import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-grey ">
      <Header />
      <div className="w-full flex-row flex justify-center ">
        <div className=" flex w-[1570px] h-[calc(100vh-100px)] bg-white rounded-[12px]">
          <Sidebar />
          <Notes />
        </div>
      </div>
    </div>
  );
};

export default App;
