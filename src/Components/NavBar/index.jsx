import {Button, createStyles, Group } from "@mantine/core";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";
// import { SettingsContext } from "../../Context/Settings";
// import Home from "../ToDo/ToDo"
// import Settings from "../SettingsRoute"
// import { When } from "react-if";
import Login from "../Login";

const navBarStyle = createStyles((theme) => ({
  navBar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
  },
  link: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[0],
    textDecoration: "none",
  },
}));

const NavBar = () => {
  const { classes } = navBarStyle();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, logout, user } = useContext(AuthContext);
console.log('user', user)

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <Group position="apart" className={classes.navBar}>
        <Group>
          <Link className={classes.link} to="/" default>
            Home
          </Link>
          <Link className={classes.link} to="/settings">
            Settings
          </Link>
        </Group>
        <Group position="right">
          <Login />
          {/* <form onSubmit={handleLogin}>
            <label>
              Username
              <input onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password
              <input onChange={(e) => setPassword(e.target.value)} />
            </label>
            <Button type="submit">Login</Button>
          </form>
          <Button onClick={logout}>Logout</Button> */}
        </Group>
      </Group>
    </>
  );
};

export default NavBar;
