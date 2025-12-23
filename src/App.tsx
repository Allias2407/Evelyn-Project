import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path="/Evelyn-Project/" element={<Home/>} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
