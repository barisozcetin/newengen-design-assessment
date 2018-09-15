import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header--title">
        <img src="/logo.png" alt="New Engen" />
      </div>
      <form className="search--form">
        <input type="text" defaultValue="Search" className="search--input" />
      </form>
      <style jsx>
        {`
          .header {
            grid-area: header;
            background-color: #363c3c;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
          }
          .search--form {
            height: auto;
          }
          .search--input {
            height: 40px;
            border-radius: 10px;
            padding: 5px;
            padding-left: 10px;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
