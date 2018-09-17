import React, { Component } from "react";
import { connect } from "react-redux";
import { getVisibleColors } from "../selectors/colors";
import { setSelectedColor } from "../actions/colors";
import ColorGridItem from "./ColorGridItem";

class ColorGrid extends Component {
  state = {
    activePage: 1,
    swatchPerPage: 12
  };
  componentDidUpdate(prevProps) {
    if (
      prevProps.selectedMainColor !== this.props.selectedMainColor ||
      prevProps.searchText !== this.props.searchText
    ) {
      this.setState({ activePage: 1 });
    }
  }
  changeActivePage = page => {
    this.setState({ activePage: page });
  };
  handleColorChange = (color = "") => {
    this.props.dispatch(setSelectedColor(color));
  };
  render() {
    const { visibleColors } = this.props;
    const { activePage, swatchPerPage } = this.state;
    const start = (activePage - 1) * 12;

    const paginatedColors = visibleColors.slice(start, start + swatchPerPage);
    const totalPages = Math.ceil(visibleColors.length / swatchPerPage);
    const paginationArr = new Array(totalPages).fill(1);
    return (
      <main className="container">
        <div className="swatch--grid">
          {paginatedColors.map(color => (
            <ColorGridItem
              key={color}
              color={color}
              onColorChange={this.handleColorChange}
            />
          ))}
        </div>
        <ul className="pagination">
          {paginationArr.map((page, index) => (
            <li
              key={index}
              onClick={() => this.changeActivePage(index + 1)}
              className={`page ${activePage === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </li>
          ))}
        </ul>
        <style jsx>{`
          .container {
            height: 100%;
            display: grid;
            grid-template-rows: 70vh auto;
            grid-gap: 0.6rem;
          }
          .pagination {
            justify-self: center;
          }
          .swatch--grid {
            display: grid;
            justify-content: center;
            grid-gap: 0.8rem;
            height: 100%;
            grid-template-columns: repeat(3, minmax(0px, 220px));
            grid-template-rows: repeat(4, minmax(60px, 1fr));
          }
          // old phones
          @media screen and (max-width: 350px) {
            .swatch--grid {
              grid-template-columns: repeat(3, minmax(50px, 85px));
              grid-template-rows: repeat(4, minmax(40px, 80px));
              grid-gap: 15px;
            }
          }
          @media screen and (min-width: 769px) {
            .swatch--grid {
              grid-template-columns: repeat(4, minmax(100px, 200px));
              grid-template-rows: repeat(3, minmax(100px, 200px));
              row-gap: 3rem;
              column-gap: 2rem;
            }
          }
          @media screen and (min-width: 1800px) {
            .swatch--grid {
              column-gap: 50px;
              row-gap: 40px;
            }
            .container {
            }
            .content {
              grid-area: content;
            }
          }
          .swatch--color {
            height: 80%;
            border-radius: 10px 10px 0 0;
          }
          .swatch--card {
            border: 1px solid black;
            border-radius: 10px;
          }
          .swatch--title {
            padding: 0 5px 0 20px;
            text-transform: lowercase;
          }
          .pagination {
            list-style: none;
            display: flex;
            flex-direction: row;
            align-self: center;
          }
          .page {
            padding: 5px;
            cursor: pointer;
          }
          .page.active {
            font-weight: bold;
            text-decoration: underline;
          }
        `}</style>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const visibleColors = getVisibleColors(state);
  return {
    visibleColors,
    selectedMainColor: state.colors.selectedMainColor,
    searchText: state.colors.searchText
  };
};

export default connect(mapStateToProps)(ColorGrid);
