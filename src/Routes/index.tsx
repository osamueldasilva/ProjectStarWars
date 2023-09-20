import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import "../Global.css";
import { PeoplePage } from "../Pages/PeoplePage";

export function RoutesProvier() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/PeoplePage" element={<PeoplePage />} />
    </Routes>
  );
}
