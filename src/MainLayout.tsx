import { Outlet } from "react-router-dom";
import SideBar from "./pages/SideBar";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
      <SideBar />
      <div
        className="flex-1 p-4 bg-gray overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
