import React from "react";
import { connect } from "react-redux";
import { setSearchText } from "./../actions/colors";

const SearchBox = props => {
  const handleChange = e => {
    // console.log(e.target.value);
    const val = e.target.value;
    console.log(val);
    props.dispatch(setSearchText(val));
  };
  return (
    <form className="search--form" onSubmit={() => {}}>
      <input
        type="text"
        placeholder="Search"
        className="search--input"
        value={props.searchText}
        // onChange={handleChange}
        onChange={e => props.dispatch(setSearchText(e.target.value))}
      />
      <i
        role="button"
        className="clear"
        hidden={props.searchText === ""}
        onClick={() => props.dispatch(setSearchText())}
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
            height: 40px;
            border-radius: 10px;
            padding: 5px;
            padding-left: 10px;
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
