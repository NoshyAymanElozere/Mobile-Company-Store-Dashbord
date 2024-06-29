import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../component/layout/navbar";
import Sidebar from "../component/layout/sidebar";
import { useAuth } from "../context/auth/AuthProvider";

const Dashboard = () => {
  const [IsSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!IsSidebarOpen);
  };
  const token = localStorage.getItem("AUTH_TOKEN");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  if (token) {
    return (
      <div className="dark:bg-[#1a103d] dark:text-white duration-700">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className=" sm:flex sm:relative ">
          <Sidebar IsSidebarOpen={IsSidebarOpen} />
          <div className="h-screen flex-1 p-1">
            <Outlet />
          </div>
        </div>
      </div>
    );
  } else {
    navigate("/login");
  }
};
export default Dashboard;
