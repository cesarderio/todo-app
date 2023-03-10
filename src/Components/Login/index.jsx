import { useContext, useState } from "react";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { If, Then, Else } from "react-if";
import { AuthContext } from "../../Context/Auth";

const Login = () => {
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    logout();
  };

  return (
    <>
      <If condition={isLoggedIn}>
        <Then>
          <Button color="red.7" onClick={handleLogout}>
            Log Out
          </Button>
        </Then>
        <Else>
          <TextInput
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"></TextInput>

          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"></TextInput>
        </Else>
      </If>
      <If condition={!isLoggedIn}>
      <Button color="gray.8" onClick={() => login(username, password)}>
        Login
      </Button>
      </If>
    </>
  );
};

export default Login;

/* <form onSubmit={handleLogin}>
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
          <Button onClick={logout}>Logout</Button> */
