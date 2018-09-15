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
    if (prevProps.selectedMainColor !== this.props.selectedMainColor) {
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
    // console.log(paginatedColors);
    return (
      <main className="container">
        <div className="swatch--grid">
          {paginatedColors.map(color => (
            <ColorGridItem
              key={color}
              color={color}
              onColorChange={this.handleColorChange}
            />
            // <div
            //   key={color}
            //   className="swatch--card"
            //   onClick={() => this.props.dispatch(setSelectedColor(color))}
            // >
            //   <div className="swatch--color" style={{ background: color }} />
            //   <div className="swatch--title">
            //     <p>{color}</p>
            //   </div>
            // </div>
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
            // grid-area: content;
            // margin: 20px;
            // margin-left: 60px;
            // margin-right: 60px;
            display: flex;
            flex-direction: column;
          }
          .swatch--grid {
            display: grid;
            padding: 10px;
            padding-left: 1rem;
            padding-right: 1rem;
            column-gap: 8px;
            row-gap: 6px;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 200px 200px 200px;
          }
          @media screen and (min-width: 768px) {
            .swatch--grid {
              padding: 20px;
              padding-left: 1rem;
              padding-right: 1rem;
              column-gap: 40px;
              row-gap: 30px;
            }
          }
          @media screen and (min-width: 1600px) {
            .swatch--grid {
              padding: 40px;
              padding-left: 10rem;
              padding-right: 10rem;
              column-gap: 80px;
              row-gap: 60px;
            }
            .content {
              grid-area: content;
              margin: 20px;
              margin-left: 60px;
              margin-right: 60px;
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
            color: #363c3c;
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
  // const { allColors, selectedColor, selectedMainColor } = colors;
  // console.log(...Object.values(allColors));
  return { visibleColors, selectedMainColor: state.colors.selectedMainColor };
};

export default connect(mapStateToProps)(ColorGrid);
