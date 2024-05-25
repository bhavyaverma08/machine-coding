import React from "react";

const Matrix = (props) => {
  const { myMatrix, handleOnClick } = props;
  return (
    <div>
      {myMatrix.map((row, i1) => {
        return (
          <div style={{ display: "flex" }}>
            {row.map((el, i2) => {
              return (
                <div
                  onClick={() => handleOnClick(el, i1, i2)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100px",
                    height: "100px",
                    background: "wheat",
                    border: "1px solid black",
                  }}
                >
                  {el}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Matrix;
