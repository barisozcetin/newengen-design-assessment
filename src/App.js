import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.css";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Loading from "./components/Loading";

class App extends Component {
  state = {
    sidebar: false
  };
  toggleSidebar = () => {
    this.setState(prevState => ({ sidebar: !prevState.sidebar }));
  };
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    window.addEventListener("resize", this.setHeight.bind(this));
    this.setHeight();
  }
  // Right now mobile browsers include their app menu to viewport height property.
  // There are discussions about it on internet. I figured it by adding a resize event listener and setting height property dynamically
  setHeight = () => {
    const height = window.innerHeight;
    this.setState({ height });
  };
  getHeight = () => {
    return this.state.height + "px";
  };
  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <div className="app">
        <Header toggleSidebar={this.toggleSidebar} />
        <SideBar active={this.state.sidebar} />
        <Main />
        <style jsx>{`
          .app {
            height: ${this.getHeight()};
            max-height: 100vh;
            overflow: hidden;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            grid-template-areas:
              "header"
              "content";
          }

          @media screen and (min-width: 769px) {
            .app {
              // 1 to 4.5 comes from the design
              grid-template-columns: 2fr 9fr;
              grid-template-rows: 100px 1fr;
              grid-template-areas:
                "header header"
                "sidebar content";
            }
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ loading }) => ({
  loading
});

export default connect(mapStateToProps)(App);
