import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.css";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const mainColors = Object.keys(this.props.colors.allColors);
    // console.log(this.props.colors.allColors);
    return (
      <div className="app">
        {/* <header className="header">
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
        </header> */}
        <Header />
        <SideBar />
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
