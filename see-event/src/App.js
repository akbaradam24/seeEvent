import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import SearchEvents from "./pages/SearchEvents";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import ErrorPage from "./pages/ErrorPage";

import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search-events" element={<SearchEvents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
=======
      {/* <Loader /> */}
      <Register />
      {/* <Login /> */}
>>>>>>> a7aaf2253902119b0fd88eecb3c5e6b97027d0ab
    </div>
  );
}

export default App;
