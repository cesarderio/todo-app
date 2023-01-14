import React, { useContext } from "react";
import NavBar from "./Components/NavBar";
// import TodoHeader from "./Components/TodoHeader"
import ToDo from "./Components/ToDo/ToDo.jsx";
// import { Router, Route, RouterProvider } from "react-router";
// import Home from "./Components/HomeRoute";
// import Settings from "./Components/SettingsRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsForm from "./Components/SettingsForm";

import { When } from "react-if";
import { AuthContext } from "./Context/Auth";
import Footer from "./Components/Footer";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <Auth> */}
        <When condition={isLoggedIn}>
          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        </When>
        {/* </Auth> */}
        <Footer />
      </BrowserRouter>
      {/* <Auth capability="read">
        <p>I can read</p>
      </Auth>
      <Auth capability="create">
        <p>I can create</p>
      </Auth>
      <Auth capability="update">
        <p>I can update</p>
      </Auth>
      <Auth capability="delete">
        <p>I can delete</p>
      </Auth> */}
    </>
  );
};

export default App;
