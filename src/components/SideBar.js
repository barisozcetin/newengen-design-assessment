import React from "react";
import { connect } from "react-redux";
import { setMainColor, selectRandomColor } from "../actions/colors";
import SearchBox from "./SearchBox";

const SideBar = props => {
  return (
    <nav className="sidebar" aria-expanded={props.active}>
      <div className="sidebar--container">
        <div className="sidebar--random">
          <button
            className="random--button"
            onClick={() => props.dispatch(selectRandomColor())}
          >
            Random Color
          </button>
        </div>
        <div className="sidebar--search">
          <SearchBox />
        </div>
        <ul className="sidebar--list">
          {props.mainColors.map(color => {
            const active = props.selectedMainColor === color;
            return (
              <li key={color}>
                <a
                  role="button"
                  className={`list--item ${active ? "active" : ""}`}
                  onClick={() => props.dispatch(setMainColor(color))}
                >
                  {color}
                </a>
                {active && (
                  <a
                    role="button"
                    onClick={() => props.dispatch(setMainColor())}
                  >
                    X
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .sidebar {
          background: #d6d8d8;

          position: fixed;
          top: 100px;
          left: 0;
          overflow: hidden;
          width: 0;
          height: 100%;
          transition: all 0.3s ease-out;
        }
        .sidebar--container {
          margin: 25px;
        }
        .sidebar--search {
          display: flex;
          justify-content: center;
        }
        @media screen and (max-width: 768px) {
          .sidebar * {
            transition: all 0.3s ease-out;
          }
          .sidebar[aria-expanded="true"] {
            opacity: 1;
            width: 250px;
            border: 1px solid #adadad;
            box-shadow: 2px 0px 6px 0px rgba(0, 0, 0, 0.2);
          }
          .sidebar[aria-expanded="false"] * {
            opacity: 0;
            width: 0;
          }
        }
        @media screen and (min-width: 769px) {
          .sidebar {
            position: relative;
            top: 0;
            grid-area: sidebar;
            border: 1px solid #adadad;
            width: 100%;
            box-shadow: 2px 0px 6px 0px rgba(0, 0, 0, 0.2);
          }
          .sidebar--container {
            padding: 20px;
          }
          .sidebar--search {
            display: none;
          }
        }
        .sidebar--random {
          padding: 5px;
          display: flex;
          justify-content: center;
        }
        .sidebar--random button {
          background: white;
          border-radius: 10px;
          width: 80%;
          padding: 10px;
          padding-left: 15px;
          padding-right: 15px;
          color: #363c3c;
          font-size: 16px;
          font-style: normal;
          font-stretch: normal;
          font-weight: 700;
          line-height: 32px;
          text-align: center;
          text-transform: none;
          text-decoration: none;
          letter-spacing: 0px;
        }
        .sidebar--list {
          list-style: none;
        }
        .sidebar--list li {
          color: #363c3c;
          font-size: 20px;
          font-style: normal;
          font-stretch: normal;
          font-weight: 400;
          line-height: 37px;
          text-align: left;
          text-transform: capitalize;
          text-decoration: none;
          letter-spacing: 0px;
          display: flex;
          justify-content: space-between;
        }
        .sidebar--list a {
          cursor: pointer;
        }
        .list--item.active {
          text-decoration: underline;
          font-weight: bolder;
        }
        .random-button {
          width: auto;
        }
      `}</style>
    </nav>
  );
};

const mapStateToProps = ({ colors }) => ({
  mainColors: colors.mainColors,
  selectedMainColor: colors.selectedMainColor
});

export default connect(mapStateToProps)(SideBar);
