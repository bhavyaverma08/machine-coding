import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoData from "../assets/data/DemoData";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {DemoData.map((el) => (
          <Route key={el.id} path={el.demoRoute} element={el.demoComponent} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
