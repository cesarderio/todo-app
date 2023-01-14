import React, { useContext } from "react";
import NavBar from "./Components/NavBar";
import ToDo from "./Components/ToDo/ToDo.jsx";
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
        <When condition={isLoggedIn}>
          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        </When>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
