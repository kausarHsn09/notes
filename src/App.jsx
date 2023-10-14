import { Route, Routes, BrowserRouter,Navigate} from "react-router-dom";
import Notes from "./components/Notes";
import Reminders from "./components/Reminders";
import Archives from "./components/Archives";
import AppLayout from "./components/AppLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route  path="notes" element={<Notes />}>
              <Route path="reminders" element={<Reminders />} />
              <Route path="archives" element={<Archives />} />
              <Route path="label/:labelID" element={<Archives />} />
            </Route>
            <Route index element={<Navigate to="/notes" replace />} />
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
