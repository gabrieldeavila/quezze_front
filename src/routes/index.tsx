import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useMobile } from "./../Hooks/useMobile";
import { RoutesContainer } from "./style";

import NotFound from "./../Pages/NotFound/index";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "./scrollToTop";
import Create from "../Pages/Create";

const Home = lazy(() => import("../Pages/Home"));
const Profile = lazy(() => import("../Pages/Profile"));
const Play = lazy(() => import("../Pages/Play"));

export default function RoutesWrapper() {
  const isMobile = useMobile();

  return (
    <Suspense fallback={""}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Sidebar />
        <RoutesContainer isMobile={isMobile}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/play/:id" element={<Play />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RoutesContainer>
      </Router>
    </Suspense>
  );
}
