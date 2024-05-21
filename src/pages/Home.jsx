import React from "react";
import DemoData from "../assets/data/DemoData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Hello, Welcome to this space</h3>
      <h4>Here we will explore different machine coding demos.</h4>
      {DemoData.map((el) => {
        return (
          <div
            onClick={() => {
              navigate(el.demoRoute);
            }}
            style={{ border: "1px solid black" }}
          >
            <p>{el.demoName}</p>
            <p>{el.demoDescription}</p>
          </div>
        );
      })}
    </>
  );
};

export default Home;
