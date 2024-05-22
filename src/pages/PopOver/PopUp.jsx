import React from "react";
import "./styles.css";

const PopUp = (props) => {
  const { handleClose } = props;
  return (
    <div onClick={(e) => e.stopPropagation()} className="pop-up">
      <div className="pop-up-header">
        <h3>This is my pop-up container</h3>
      </div>
      <div className="pop-up-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        malesuada ullamcorper lacus, vitae efficitur sapien porttitor vitae. Sed
        ornare vestibulum leo eu varius. Sed interdum consectetur odio, ut
        consequat purus sagittis id. Maecenas fringilla leo quis lacinia
        egestas. Proin erat turpis, lacinia nec tellus a, ultricies accumsan
        felis. Suspendisse non facilisis purus. Nam imperdiet metus quis diam
        laoreet, sit amet fermentum justo pretium. Etiam eu dictum enim,
        placerat fermentum arcu
      </div>
      <div className="pop-up-footer">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="button-styles"
        >
          Close pop-up
        </button>
      </div>
    </div>
  );
};

export default PopUp;
