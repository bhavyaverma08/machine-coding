import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";
import PopUp from "./PopUp";
import "./styles.css";

const PopOver = () => {
  const [open, setOpen] = useState(false);

  return (
    <PageLayout>
      <div
        onClick={() => setOpen(false)}
        className={open ? "pop-up-container-shadow" : "pop-up-container"}
      >
        <h3>Pop-Over component</h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="button-styles"
        >
          Open Pop-up
        </button>
        {open && <PopUp handleClose={() => setOpen(false)} />}
      </div>
    </PageLayout>
  );
};

export default PopOver;
