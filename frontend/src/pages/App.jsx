import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./registration/login";
import { SignUp } from "./registration/sign-up";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route exact path="login" element={<Login />} />
        <Route exact path="sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
