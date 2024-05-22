import React from "react";
import DemoData from "../assets/data/DemoData";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <h3>Hello, Welcome to this space</h3>
      <h4>Here we will explore different machine coding demos.</h4>
      <div className="home-container">
        {DemoData.map((el) => {
          return (
            <div
              onClick={() => {
                navigate(el.demoRoute);
              }}
              className="card-container"
            >
              <p className="demo-name">{el.demoName}</p>
              <p>{el.demoDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
