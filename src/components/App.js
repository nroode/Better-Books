import React, { useState } from "react";
import Book from "./book";

import logo from "../logo.svg";
import "../App.scss";

function App() {
  

  let getBooks = query => {
    var fullURL =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      query +
      "&startIndex=0&maxResults=20&key=AIzaSyBMR9EuN0ZcSXWLLdEvH1Q60t92NoaE-KQ";

    console.log(fullURL);

    fetch(`${fullURL}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let bookData = data.items;

        console.log(bookData);
      });
  };

  return (
    <div className="App">
      <h1>Book Finder</h1>
      <form onSubmit={getBooks("apple")}>
        <input type="text" name="name" />
        <button>Find</button>
      </form>

      <hr />

      <Book />
    </div>
  );
}

export default App;
