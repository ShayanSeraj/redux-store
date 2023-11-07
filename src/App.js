import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  console.log("user: ", user);
  console.log("authUser: ", authUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Main></Main> : <Login></Login>}
          />
          <Route path="/login" element={<Login></Login>} />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
