const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const authorSchema = new Schema({
  name: { type: String },
  age: { type: Number },
});

const Author = mongoose.model("Author", authorSchema);

exports.Author = Author;
