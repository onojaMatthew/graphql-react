import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";


class AddBooks extends Component {
  staote = {
    name: "",
    genre: "",
    authorId: ""
  }

  displayAuthors() {
    const data = this.props.data;
    if (data.loading) {
      return (
        <option disabled>Loading authors...</option>
      );
    } else {
      return (
        data.authors.map(author => (
          <option key={author.id} value={author.id}>{author.name}</option>
        ))
      );
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    const { data } = this.props;
    return(
      <div>
        <form id="add-book" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Book Name</label>
            <input type="text" onChange={(e) => this.setState({ name: e.target.value })}/>
          </div>

          <div className="field">
            <label>Genre</label>
            <input type="text" onChange={(e) => this.setState({ genre: e.target.value })}/>
          </div>

          <div className="field">
            <label>Authors:</label>
            <select onChange={(e) => this.setState({ authorId: e.target.value })}>
              <option>Select authors</option>
              {this.displayAuthors()}
            </select>
          </div>
          <button>+</button>
        </form>
      </div>
    )
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBooks);