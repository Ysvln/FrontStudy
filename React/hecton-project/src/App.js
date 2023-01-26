import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors";
import Story from "./pages/Story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/story" element={<Story />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
