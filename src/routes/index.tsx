import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./../Pages/NotFound/index";

import { RoutesContainer } from "./style";
import { useMobile } from "./../Hooks/useMobile";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = lazy(() => import("../Pages/Home"));

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RoutesContainer>
      </Router>
    </Suspense>
  );
}
