import React from "react";
import SearchBox from "./SearchBox";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header--container">
        <div className="header--title">
          <img src="/logo.png" alt="New Engen" />
        </div>
        <div className="search">
          <SearchBox />
        </div>
        <div className="sidebar--menu">
          <i role="button" onClick={toggleSidebar}>
            ≡
          </i>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            grid-area: header;
            background-color: #363c3c;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

            padding: 30px;
          }
          .header--container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .search {
            display: none;
          }
          .sidebar--menu {
            display: block;
            color: white;
            font-size: 58px;
          }
          .sidebar--menu i {
            cursor: pointer;
          }
          @media screen and (min-width: 769px) {
            .search {
              display: block;
            }
            .sidebar--menu {
              display: none;
            }
            .header--container {
              margin-left: 2rem;
              margin-right: 2rem;
            }
          }
          @media screen and (min-width: 1500px) {
            .header--container {
              margin-left: 3rem;
              margin-right: 12rem;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
