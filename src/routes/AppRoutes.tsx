import { Routes, Route } from "react-router-dom";
import { wikiRouteBase } from "@data/constants";

import Home from "@pages/Home"
import About from "@pages/About";
import WikiPage from "@pages/WikiPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path={wikiRouteBase + "/:id"} element={<WikiPage />} />
    </Routes>
  );
}
