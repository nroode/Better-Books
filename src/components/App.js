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
      isLoading: false,
      error: false
    };
  }

  handleQuery = e => {
    this.setState({ isLoading: true });
    e.preventDefault();
    const query = e.target.name.value;
    query
      ? this.getBooks(query)
      : this.noInput()
      
    e.target.name.value = "";
  };

  noInput() {
    alert("Please enter a topic for your search");
    this.setState({
      error: false,
      isLoading: false
    });
  }

  getBooks(query) {
    var fullURL =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      query +
      "&startIndex=0&maxResults=20&key=AIzaSyC10CZ4XkZNmjshEPGYL_gQIREG5tJnFeQ";

    axios
      .get(`${fullURL}`)
      .then(res => {
        if (res.data.items.length > 0) {
          const bookList = res.data.items;
          console.log("data");
          this.setState({
            error: false,
            bookList,
            isLoading: false
          });
        } else {
          this.setState({
            error: true,
            bookList: [],
            isLoading: false
          });
        }
      })
      .catch(err => {
        this.setState({
          error: true,
          bookList: [],
          isLoading: false
        });
      });
  }

  render() {
    let { bookList, isLoading, error } = this.state;
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
            {error ? (
              <div className="book-results-message">
                No results found. Try another search.
              </div>
            ) : (
              <div className="book-results-container">
                {bookList.length === 0 && isLoading === false ? (
                  <div className="book-results-message">
                    Type in a subject, author, or book title to begin your
                    search
                  </div>
                ) : (
                  ""
                )}

                { isLoading ? (
                  <div className="book-results-message">loading...</div>
                ) : (
                  bookList.map(book => (
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
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
