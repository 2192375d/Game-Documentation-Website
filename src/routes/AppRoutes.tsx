import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home"
import About from "@pages/About";
import TouhouMOF from "@pages/TouhouMOF";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/touhou10" element={<TouhouMOF />} />
    </Routes>
  );
}
