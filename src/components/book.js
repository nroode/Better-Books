import React from "react";
import Unavailable from "../unavailable-image.jpg";

import "./Book.scss";

const Book = props => (
  <div className="book">
    <div className="book-cover">
      {props.image ? (
        <img
          src={props.image.thumbnail}
          alt="book-cover"
          className="book-img"
        />
      ) : (
        <img src={Unavailable} className="book-img-none" alt="unavailable"/>
      )}
    </div>
    <div className="book-details">
      <div>
        <h3 className="book-title">{props.title}</h3>
        <p>
          <span>By:</span>
          {props.author ? props.author.join(" & ") : "Unspecified"}
        </p>
        <p>
          <span>Publisher:</span>
          {props.publisher ? props.publisher : "Unspecified"}
        </p>
      </div>
      <a href={props.extLink} target="_blank">
        <button className="btn">More</button>
      </a>
    </div>
  </div>
);

export default Book;
