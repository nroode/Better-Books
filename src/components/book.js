import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book">
        <div className="book-cover">
          <img
            src={this.props.image ? this.props.image.thumbnail : "no image"}
            alt="cover-image"
          />
        </div>
        <div className="book-details">
          <h3>{this.props.title}</h3>
          <p>By: {this.props.author ? this.props.author.join(" & ") : "n/a"}</p>

          {this.props.publisher ? this.props.publisher : "n/a"}
          <a href={this.props.extLink}>
            <button>More</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Book;
