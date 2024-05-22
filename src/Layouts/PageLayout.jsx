import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const PageLayout = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div style={{ padding: "20px" }}>
      <button className="button-styles" onClick={handleBack}>
        Back
      </button>
      {children}
    </div>
  );
};

export default PageLayout;
