import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import AddBookForm from "./AddBookForm";
import { getAuthorsQuery } from "../queries/queries";


class AddBooks extends Component {
  render() {
    const { data } = this.props;
    return(
      <div>
        <AddBookForm data={data} />
      </div>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBooks);