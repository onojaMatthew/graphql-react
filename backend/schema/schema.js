const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const  books = [
  { name: "Name of the wind", genere: "Fantasy", id: "1", authorId: "1" },
  { name: "The final Empire", genere: "Fantasy", id: "2", authorId: "2" },
  { name: "The Long Earth", genere: "Sci-Fi", id: "3", authorId: "3" }
];

const authors = [
  { name: "Onoja Matthew", age: 33, id: "1" },
  { name: "Godwin Obute", age: 50, id: "2" },
  { name: "Emmanuel Enejo", age: 45, id: "3" }
]

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genere: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log(parent);
        return _.find(authors, { id: parent.authorId });
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueries",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return _.find(books, { id: args.id})
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});