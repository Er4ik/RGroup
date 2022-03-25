import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./registration/login";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route exact path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
