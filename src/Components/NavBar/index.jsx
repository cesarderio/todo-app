import { Text, createStyles } from "@mantine/core";
import { Router, Routes, Route, Link } from "react-router-dom";
import Home from "../ToDo/ToDo"
import Settings from "../SettingsRoute"

const navBarStyle = createStyles((theme) => ({
  navBar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[0],
  },
}));

const NavBar = () => {
  const { classes } = navBarStyle();

  return (
    <>
      {/* <Router> */}
        <div className={classes.navBar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={< Home />}></Route>
            <Route exact path="/settings" element={< Settings />}></Route>
          </Routes>
       </div>
      {/* </Router> */}
    </>
  );
};

export default NavBar;
