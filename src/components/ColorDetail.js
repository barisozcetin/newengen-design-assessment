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
            grid-template-rows: 50vh 15vh 30px;
            // grid-template-columns: 90vw;
            // grid-template-columns: 80%;
            width: 100%;
            align-self: center;
            grid-gap: 10px;
          }
          .similar-list {
            height: 100%;
            display: grid;
            grid-template-columns: repeat(5, minmax(30px, 1fr));
            grid-gap: 8px;
          }
          .clear {
            justify-self: center;
            background: transparent;
            font-size: 16px;
            border: 1px solid #363c3c;
            border-radius: 5px;
            padding-right: 20px;
            padding-left: 20px;
          }
          @media screen and (min-width: 769px) {
            .container {
              width: 100%;
            }
            .similar-list {
              grid-gap: 20px;
            }
          }
          @media screen and (min-width: 1800px) {
            .container {
              width: 100%;
            }
            .similar-list {
              grid-gap: 60px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ColorDetail;
