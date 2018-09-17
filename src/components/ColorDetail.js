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
            // padding-top: 20px;
            margin: 20px;
            grid-template-rows: 50vh 15vh 30px;
            grid-template-columns: 1fr;
            grid-gap: 30px;
          }
          @media screen and (min-width: 769px) {
            .container {
              margin: 25px;
              padding-right: 12vw;
              padding-left: 12vw;
            }
          }
          @media screen and (min-width: 1800px) {
            .container {
              padding-top: 40px;
              padding-left: 250px;
              padding-right: 250px;
              margin-left: 1.4rem;
              margin-right: 1.4rem;
            }
          }
          .similar-list {
            height: 100%;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 20px;
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
        `}
      </style>
    </div>
  );
};

export default ColorDetail;
