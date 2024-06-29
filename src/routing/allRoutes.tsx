import { Route, Routes } from "react-router-dom";
import ChangePassword from "../api/changePassword";
import Settings from "../component/Settings";
import Table from "../component/table";
import CustomForm from "../component/CustomForm";
import Dashboard from "../dashbord/dashboard";

export const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/CustomForm" element={<CustomForm />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Table" element={<Table />} />
      </Route>
      {/* <Route path="/Login" element={<Loginpage />} /> */}
    </Routes>
  );
};
