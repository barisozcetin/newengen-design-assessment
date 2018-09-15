import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.css";
import Main from "./components/Main";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const mainColors = Object.keys(this.props.colors.allColors);
    console.log(this.props.colors.allColors);
    return (
      <div className="app">
        <header className="header">
          <div className="header--title">
            <img src="/logo.png" alt="New Engen" />
          </div>
          <form className="search--form">
            <input
              type="text"
              defaultValue="Search"
              className="search--input"
            />
          </form>
        </header>
        <nav className="sidebar">
          <div className="sidebar--random">
            <button>Random Color</button>
          </div>
          <ul className="sidebar--list">
            {mainColors.map(color => (
              <li key={color}>{color}</li>
            ))}
          </ul>
        </nav>
        <Main />
        <style jsx>{`
          .app {
            max-height: 100vh;
            display: grid;
            // 1 to 4.5 comes from the design
            grid-template-columns: 2fr 9fr;
            grid-template-rows: 100px minmax(80vh, 90vh);
            grid-template-areas:
              "header header"
              "sidebar content";
          }
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
          }
          // .content {
          //   grid-area: content;
          // }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, colors, mainColors }) => ({
  loading,
  colors,
  mainColors
});

export default connect(mapStateToProps)(App);
