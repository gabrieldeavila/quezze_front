import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useMobile } from "./../Hooks/useMobile";
import { RoutesContainer } from "./style";

import NotFound from "./../Pages/NotFound/index";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = lazy(() => import("../Pages/Home"));
const Profile = lazy(() => import("../Pages/Profile"));

export default function RoutesWrapper() {
  const isMobile = useMobile();

  return (
    <Suspense fallback={""}>
      <Router>
        <Navbar />
        <Sidebar />
        <RoutesContainer isMobile={isMobile}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RoutesContainer>
      </Router>
    </Suspense>
  );
}
