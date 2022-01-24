import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import SearchEvents from "./pages/SearchEvents";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyAccount from "./components/MyAccount";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search-events" element={<SearchEvents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
