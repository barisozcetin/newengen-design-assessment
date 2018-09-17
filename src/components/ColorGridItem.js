import React from "react";

const ColorGridItem = ({ color, onColorChange, size }) => {
  let fontSize = size === "large" ? "32px" : "16px";
  let rows = size === "small" ? "2fr 1fr" : "5fr 1fr";
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
          border: 1px solid #fdfdfd;
          background: #fdfdfd;
          box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          cursor: pointer;
          display: grid;
          grid-template-rows: ${rows};
        }
        .swatch--title {
          text-transform: lowercase;
          display: flex;
        }
        p {
          align-self: center;
          font-size: ${fontSize};
          padding-left: 1px;
        }
        @media screen and (min-width: 768px) {
          .swatch--title p {
            padding-left: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ColorGridItem;
