import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";

const Accordion = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <PageLayout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px 0px",
          borderRadius: "2px",
          marginTop: "10px",
          padding: "10px",
          justifyContent: "space-between",
          border: "1px solid #cecece",
          cursor: "pointer",
        }}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <h3 style={{ margin: "0px 10px" }}>
          This is my Accordion component ! (click to expand)
        </h3>
        <span
          style={{ transitionTimingFunction: "ease-out" }}
          className={`material-icons-round`}
        >
          {expanded ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </div>

      <div
        style={{
          height: expanded ? "100px" : "0px",
          transition: "height 0.5s",
          overflow: "hidden",
          padding: "10px",
          transitionTimingFunction: "linear",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </PageLayout>
  );
};

export default Accordion;
