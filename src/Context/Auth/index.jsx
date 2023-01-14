import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import cookie from 'react-cookies';

// const testUsers = {
//   Admininistrator: {
//     username: 'admin',
//     password: 'ADMIN',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ'
//   },
//   Editor: {
//     username: 'editor',
//     password: 'EDITOR',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsJ3VwZGF0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.3aDn3e2pf_J_1rZig8wj9RiT47Ae2Lw-AM-Nw4Tmy_s'
//   },
//   Writer: {
//     username: 'writer',
//     password: 'WRITER',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68'
//   },
//   User: {
//     username: 'user',
//     password: 'User',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go'
//   },
// };

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.access ? true : false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  // const username = authCredentials[username]

  const can = (capability) => {
    // note shorthand
    return user?.capabilities?.includes(capability);
  };

  const validateToken = (token) => {
    try {
      let validUser = jwtDecode(token);
      // console.log('validUser', validUser);
      if (validUser) {
        setUser(validUser);
        setIsLoggedIn(true);
        cookie.save('auth', token);
        // console.log("I am logged in");
      }
    } catch (e) {
      setError(e);
      console.error(e);
    }
  };



  // const login = (username, password) => {
  const login = async (username, password) => {
    // let authCredentials = testUsers[username];
    // let authCredentials = users[username];

    let signInConfig = {
      baseURL: "https://api-js401.herokuapp.com",
      url: "/signin",
      method: "post",
      auth: { username, password },
    };

    let response = await axios(signInConfig);
    // console.log('response data', response.data)
    const { token } = response.data;

    // validate we have the correct password
    if (token) {
      try {
        validateToken(token);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    }
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    cookie.remove('auth');
  };

  useEffect(() => {
    let token = cookie.load('auth');
    if(token){
      validateToken(token)
    }
  }, []);

  const values = {
    user,
    isLoggedIn,
    error,
    can,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
