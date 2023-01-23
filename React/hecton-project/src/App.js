import { BrowserRouter, Routes, Route } from "react-router-dom";
import Story from "./pages/Story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/story" element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
