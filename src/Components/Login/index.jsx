import { useContext, useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { If, Then, Else } from "react-if";
import { AuthContext } from "../../Context/Auth";

const Login = () => {
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    logout();
  }

  return (
    <>
    <If condition={isLoggedIn}>
      <Then>
        <Button color="red" onClick={handleLogout}>Log Out</Button>
      </Then>
      <Else>
        <TextInput onChange={(e)=> setUsername(e.target.value)} placeholder="Username"></TextInput>
        <TextInput onChange={(e)=> setPassword(e.target.value)} placeholder="Password"></TextInput>
      </Else>
    </If>
      <Button color="gray.8" onClick={()=> login(username, password)}>Login</Button>
    </>
  );
};

export default Login;