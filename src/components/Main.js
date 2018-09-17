import React, { Component } from "react";
import { connect } from "react-redux";
import { getVisibleColors, getSimilarColors } from "../selectors/colors";
import { setSelectedColor } from "../actions/colors";
import ColorGrid from "./ColorGrid";
import ColorDetail from "./ColorDetail";

class Main extends Component {
  // state = {
  //   activePage: 1,
  //   swatchPerPage: 12
  // };
  // componentDidUpdate(prevProps) {
  //   if (prevProps.selectedMainColor !== this.props.selectedMainColor) {
  //     this.setState({ activePage: 1 });
  //   }
  // }
  // changeActivePage = page => {
  //   this.setState({ activePage: page });
  // };
  handleColorChange = (color = "") => {
    this.props.dispatch(setSelectedColor(color));
  };
  render() {
    // const { visibleColors } = this.props;
    // const { activePage, swatchPerPage } = this.state;
    // const start = (activePage - 1) * 12;

    // const paginatedColors = visibleColors.slice(start, start + swatchPerPage);
    // const totalPages = Math.ceil(visibleColors.length / swatchPerPage);
    // const paginationArr = new Array(totalPages).fill(1);
    // console.log(paginatedColors);
    const { selectedColor, similarColors } = this.props;
    let content;
    if (selectedColor !== "") {
      content = (
        <ColorDetail
          color={selectedColor}
          similarColors={similarColors}
          onColorChange={this.handleColorChange}
        />
      );
    } else {
      content = <ColorGrid />;
    }
    return (
      <main className="content">
        {content}
        <style jsx>{`
          .content {
            grid-area: content;
            margin-left: 20px;
            margin-right: 20px;
            // margin-left: 60px;
            // margin-right: 60px;
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const visibleColors = getVisibleColors(state);
  // const { allColors, selectedColor, selectedMainColor } = colors;
  // console.log(...Object.values(allColors));
  let similarColors = [];
  if (state.selectedColor !== "") {
    similarColors = getSimilarColors(state);
  }
  return {
    visibleColors,
    selectedMainColor: state.colors.selectedMainColor,
    selectedColor: state.colors.selectedColor,
    similarColors
  };
};

export default connect(mapStateToProps)(Main);
