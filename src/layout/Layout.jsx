import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen font-sofia">
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
