import React, { Component } from "react";
import axios from "axios";
import Book from "./book";
import Search from "./Search";

import "./App.scss";
import "./Book.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      isLoading: false
    };
  }

  handleQuery = e => {
    this.setState({ isLoading: true });
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

    axios.get(`${fullURL}`).then(res => {
      const bookList = res.data.items;
      this.setState({
        bookList,
        isLoading: false
      });
    });
    //   .catch(err => {
    //     console.log(err);
    // });
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="body-heading">
            <h1>
              Book <span className="finder">finder</span>
            </h1>
            <Search handleQuery={this.handleQuery} />
          </div>
          <div className="book-results">
            {this.state.bookList.length === 0 &&
            this.state.isLoading === false ? (
              <div className="book-results-message">
                Type in a subject, author, or book title above to begin your
                search
              </div>
            ) : (
              ""
            )}
            {this.state.isLoading ? (
              <div className="book-results-message">loading...</div>
            ) : (
              this.state.bookList.map(book => (
                <Book
                  key={book.id}
                  image={book.volumeInfo.imageLinks}
                  title={book.volumeInfo.title}
                  publisher={book.volumeInfo.publisher}
                  author={book.volumeInfo.authors}
                  extLink={book.volumeInfo.infoLink}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
