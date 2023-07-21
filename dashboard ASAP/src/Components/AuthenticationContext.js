import React, { useState, createContext, useContext } from "react";
import { Post } from "../Service/Api";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState("");
  const [userid, setUserId] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("userdata"));

    if (info?.usertype == 0) {
      setUser("admin");
    } else if (info?.usertype == 1) {
      setUser("student");
    } else if (info?.usertype == 2) {
      setUser("teacher");
    } else if (info?.usertype == 3) {
      setUser("resourceteacher");
    } else if (info?.usertype == 4) {
      setUser("corporate");
    } else if (info?.usertype == 6) {
      setUser("jobadmin");
    }
  }, []);

  const onLogin = (email, password) => {
    let param = {
      email: email,
      password: password,
    };

    Post("login", param).then((data) => {
      if (data == "invalid") {
        toast.error("Invalid User!");
        return false;
      }

      setUserId(data?.loginid);
      if (data.usertype == 0) {
        setUser("admin");
        localStorage.setItem("userdata", JSON.stringify(data));
      } else if (data.usertype == 1) {
        toast.error("Invalid User!");
        return false;
      } else if (data.usertype == 2) {
        setUser("teacher");
        localStorage.setItem("userdata", JSON.stringify(data));
      } else if (data.usertype == 3) {
        setUser("resourceteacher");
        localStorage.setItem("userdata", JSON.stringify(data));
      } else if (data.usertype == 4) {
        toast.error("Invalid User!");
        return false;
      } else if (data.usertype == 6) {
        setUser("jobadmin");
        localStorage.setItem("userdata", JSON.stringify(data));
      }
    });
    setisLoading(true);
  };

  const onLogout = () => {
    localStorage.clear();
    setUser(false);
    window.location.href = "/";
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: user,
        userid,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
