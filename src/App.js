import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.css";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

class App extends Component {
  state = {
    sidebar: false
  };
  toggleSidebar = () => {
    this.setState(prevState => ({ sidebar: !prevState.sidebar }));
  };
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    // const mainColors = Object.keys(this.props.colors.allColors);
    return (
      <div className="app">
        <Header toggleSidebar={this.toggleSidebar} />
        <SideBar active={this.state.sidebar} />
        <Main />
        <style jsx>{`
          .app {
            height: 100vh;
            max-height: 100vh;
            overflow: hidden;
            display: grid;
            // 1 to 4.5 comes from the design
            grid-template-columns: 1fr;
            grid-template-rows: 100px minmax(80vh, 90vh);
            grid-template-areas:
              "header"
              "content";
          }

          // .content {
          //   grid-area: content;
          // }
          @media screen and (min-width: 769px) {
            .app {
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
