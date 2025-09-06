import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Item from "./Page/Item";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
