import React from "react";

const ColorGridItem = ({ color, onColorChange, size }) => {
  let fontSize = size === "large" ? "32px" : "16px";
  let rows = size === "small" ? "3fr 1fr" : "5fr 1fr";
  return (
    <div className="swatch--card" onClick={() => onColorChange(color)}>
      <div className="swatch--color" style={{ background: color }} />
      <div className="swatch--title">
        <p>{color}</p>
      </div>
      <style jsx>{`
        .swatch--color {
          border-radius: 10px 10px 0 0;
        }
        .swatch--card {
          border: 1px solid black;
          border-radius: 10px;
          cursor: pointer;
          display: grid;
          grid-template-rows: ${rows};
        }
        .swatch--title {
          color: #363c3c;
          padding: 0 5px 0 10px;
          text-transform: lowercase;
          margin: 5px;
        }
        p {
          font-size: ${fontSize};
        }
      `}</style>
    </div>
  );
};

export default ColorGridItem;
