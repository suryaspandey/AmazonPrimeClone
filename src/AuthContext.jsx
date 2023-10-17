import jwtDecode from "jwt-decode";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("tokens")) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      return jwtDecode(tokens.acc);
    }
  });
};

export default AuthContext;
