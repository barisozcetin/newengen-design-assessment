import React from "react";
import { connect } from "react-redux";
import { setMainColor } from "../actions/colors";

const SideBar = props => {
  return (
    <nav className="sidebar">
      <div className="sidebar--random">
        <button>Random Color</button>
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
                <a role="button" onClick={() => props.dispatch(setMainColor())}>
                  X
                </a>
              )}
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .sidebar {
          grid-area: sidebar;
          border: 1px solid #adadad;
          background: #d6d8d8;
          box-shadow: 2px 0px 6px 0px rgba(0, 0, 0, 0.2);
          padding: 20px;
          padding-top: 40px;
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
      `}</style>
    </nav>
  );
};

const mapStateToProps = ({ colors }) => ({
  mainColors: colors.mainColors,
  selectedMainColor: colors.selectedMainColor
});

export default connect(mapStateToProps)(SideBar);
