import { Route, Routes } from "react-router-dom";
import Experience from "./Experience";
import Home from "./Home";
import HomeNav from "./Home/HomeNav";
import Education from "./Education";

export default () => {
  return (
    <div>
      {/* <HomeNav /> */}
      <Routes>
        <Route path="dash-board" element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
      </Routes>
    </div>
  );
};
