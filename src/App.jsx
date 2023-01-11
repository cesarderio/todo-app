import React from "react";
import NavBar from "./Components/NavBar";
// import TodoHeader from "./Components/TodoHeader"
import ToDo from "./Components/ToDo/ToDo.jsx";
import { Switch, Route } from "react-router";
import Home from "./Components/HomeRoute";
import Settings from "./Components/SettingsRoute";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Settings" component={Settings} />
      </Switch> */}
      
      {/* <TodoHeader /> */}
      <ToDo />
      {/* <Settings /> */}
    </>
  );
};

export default App;
