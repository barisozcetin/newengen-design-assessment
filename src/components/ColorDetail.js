import React from "react";
import ColorGridItem from "./ColorGridItem";

const ColorDetail = ({ color, similarColors, onColorChange }) => {
  return (
    <div className="container">
      <ColorGridItem color={color} onColorChange={onColorChange} size="large" />
      <div className="similar">
        <ul className="similar-list">
          {similarColors &&
            similarColors.map(similarColor => (
              <ColorGridItem
                key={similarColor}
                color={similarColor}
                onColorChange={onColorChange}
                size="small"
              />
            ))}
        </ul>
      </div>
      <button className="clear" onClick={() => onColorChange()}>
        Clear
      </button>
      <style jsx>
        {`
          .container {
            display: grid;
            height: 100%;
            grid-template-rows: 50vh 25vh 30px;
            grid-template-columns: 1fr;
          }
          .similar-list {
            padding: 0;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 20px;
          }
          .clear {
            justify-self: center;
            background: transparent;
            color: #363c3c;
            border: 1px solid #363c3c;
            border-radius: 5px;
            padding-right: 20px;
            padding-left: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default ColorDetail;
