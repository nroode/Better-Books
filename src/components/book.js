import React, { Component } from "react";

import "./Book.scss";


class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book">
        <div className="book-cover">
          {this.props.image ?
            <img
            src={this.props.image.thumbnail}
            alt="book-cover"
            className="book-img"
          /> : "no image"
        
        }
        </div>
        <div className="book-details">
          <h3 className="book-title">{this.props.title}</h3>
          <p>By: {this.props.author ? this.props.author.join(" & ") : "Unspecified"}</p>

          <p>Publisher: {this.props.publisher ? this.props.publisher : "Unspecified"}</p>
        </div>
        <a href={this.props.extLink}>
            <button className="btn">More</button>
        </a>
      </div>
    );
  }
}

export default Book;
