import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "../Pages/Posts";
import Navbar from "./../components/Navbar/index";

export default function RoutesWrapper() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/new" element={<Posts />} />
      </Routes>
    </Router>
  );
}
