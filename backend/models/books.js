const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const bookSchema = new Schema({
  name: { type: String },
  genre: { type: String },
  authorId: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

exports.Book = Book;