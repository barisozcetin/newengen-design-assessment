import React from "react";
import { connect } from "react-redux";
import { setSearchText } from "./../actions/colors";

const SearchBox = props => {
  return (
    <form className="search--form" onSubmit={() => {}}>
      <input
        type="text"
        placeholder="Search"
        className="search--input"
        value={props.searchText}
        onChange={e => props.dispatch(setSearchText(e.target.value))}
        aria-label="search"
      />
      <i
        role="button"
        className="clear"
        hidden={props.searchText === ""}
        onClick={() => props.dispatch(setSearchText())}
        aria-label="Clear selection"
      >
        🗙
      </i>
      <style jsx>
        {`
          .search--form {
            height: auto;
            width: 100%;
          }
          .search--input {
            border-radius: 10px;
            padding: 10px;
            font-size: 16px;
          }
          .clear {
            cursor: pointer;
            margin-left: -25px;
          }
        `}
      </style>
    </form>
  );
};

const mapStateToProps = ({ colors }) => ({ searchText: colors.searchText });

export default connect(mapStateToProps)(SearchBox);
