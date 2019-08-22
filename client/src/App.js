import React from 'react';
import Booklist from './components/Booklist';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AddBooks from './components/AddBooks';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
  });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Ninja's Reading List</h1>
        <Booklist />
        <AddBooks />
      </div>
    </ApolloProvider>
  );
}

export default App;
