import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../helpers";
import { Forgot } from "./registration/forgot/forgot";
import { Reset } from "./registration/reset/reset";
import { SignIn } from "./registration/signIn/signIn";
import { SignUp } from "./registration/signUp/signUp";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route exact path={routes.root} element={<SignIn />} />
        <Route path={routes.signIn} element={<SignIn />} />
        <Route path={routes.signUp} element={<SignUp />} />
        <Route path={routes.forgot} element={<Forgot />} />
        <Route path={routes.reset} element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;
