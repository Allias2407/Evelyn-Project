import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import WorkRebirthProject from "./pages/WorkRebirthProject";
import WorkScHnoi from "./pages/WorkScHnoi";
import WorkSuniverse from "./pages/WorkSuniverse";

function App() {
  return (
    <>
      <BrowserRouter basename="/Evelyn-Project/">
        <Routes>
          <Route index path="/Evelyn-Project/" element={<Home />} />
          <Route path="/Evelyn-Project/about" element={<About />} />
          <Route path="/Evelyn-Project/work" element={<Work />} />
          {/* work  */}
          <Route
            path="/Evelyn-Project/rebirth-project"
            element={<WorkRebirthProject />}
          />
          <Route path="/Evelyn-Project/schnoi" element={<WorkScHnoi />} />
          <Route path="/Evelyn-Project/suniverse" element={<WorkSuniverse url = "https://www.instagram.com/reel/C5n58jzSwSn/" />} />
          {/* notfound */}
          <Route path="*" element={<div>NotFound</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
