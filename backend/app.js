const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;
// mongodb://graphqlreact:graphqlreact1@ds259586.mlab.com:59586/graphql-react
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.DB_URL}`, {
  useNewUrlParser: true
}).then(() => {
  console.log("Connection to database success");
}).catch(err => {
  console.log(err.message);
});

app.use(cors());

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});