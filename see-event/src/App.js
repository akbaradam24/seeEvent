import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import SearchEvents from "./pages/SearchEvents";

import Login from "./pages/Login";

import Footer from "./components/Footer";

import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search-events" element={<SearchEvents />} />
      </Routes>
=======
      {/* <Login /> */}
      <Register />
>>>>>>> 56439adc5d9b08b133812321911f17cc45dc299e
    </div>
  );
}

export default App;
