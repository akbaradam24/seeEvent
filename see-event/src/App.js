import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import SearchEvents from "./pages/SearchEvents";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search-events" element={<SearchEvents />} />
      </Routes>
    </div>
  );
}

export default App;
