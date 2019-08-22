import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

class Booklist extends Component{
  handleBooks = () => {
    const data = this.props.data;
    console.log(data)

    if (data.loading) {
      return (
        <div>Books loading...</div>
      );
    } else {
      return data.books && data.books.map(book => {
        return (
          <li key={book.id}>{book.name}</li>
        )
      })
    }
  }

  render() {
    return(
      <div>
        <ul>
          {this.handleBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(Booklist);
