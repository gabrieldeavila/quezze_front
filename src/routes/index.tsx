import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./../Pages/NotFound/index";

const Home = lazy(() => import("../Pages/Home"));
// import Home from "../Pages/Home";

export default function RoutesWrapper() {
  return (
    <Suspense fallback={""}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/new" element={<Posts />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
