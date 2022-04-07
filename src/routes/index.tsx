import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./../Pages/NotFound/index";

export default function RoutesWrapper() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Posts />} /> */}
        {/* <Route path="/new" element={<Posts />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
