import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";

const menu = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
];

const AppRoutes = () => {
  return (
    <Routes>
      {menu.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};
export default AppRoutes