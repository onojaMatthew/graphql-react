import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";



class AddBookForm extends Component{
  state = {
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

  render() {
    return(
      <form id="add-book">
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
    );
  }
}

export default AddBookForm;