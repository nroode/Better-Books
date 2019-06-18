import React, { Component } from "react";
import Book from "./book";

import logo from "../logo.svg";
import "../App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
  }

  handleQuery = e => {
    e.preventDefault();
    const query = e.target.name.value;
    query
      ? this.getBooks(query)
      : alert("Please enter a topic for your search");
    e.target.name.value = "";
  };

  getBooks(query) {
    var fullURL =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      query +
      "&startIndex=0&maxResults=20&key=AIzaSyC10CZ4XkZNmjshEPGYL_gQIREG5tJnFeQ";

    fetch(`${fullURL}`)
      .then(results => results.json())
      .then(data => {
        this.setState({ bookList: data.items });
      });
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1>Book Finder</h1>
          <form onSubmit={e => this.handleQuery(e)}>
            <input type="text" name="name" />
            <button>Find</button>
          </form>

          <hr />

          {this.state.bookList.map(book => (
            <Book 
            key={book.id} 
            image={book.volumeInfo.imageLinks}
            title={book.volumeInfo.title}
            publisher={book.volumeInfo.publisher}
            author={book.volumeInfo.authors}
            extLink={book.volumeInfo.infoLink}
             />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
