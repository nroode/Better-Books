import React from "react";

const Search = props => (
  <div>
    <form onSubmit={(e) => props.handleQuery(e)}>
      <input type="text" name="name" className="search-input" placeholder="enter search term" />
      <button className="btn">Find</button>
    </form>
  </div>
);

export default Search;
