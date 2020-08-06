// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const Post = new Schema(
  {
    title: String,
    img: String,
    sub_title: String,
    description: String,
    category: String,
    comments: Array,
    likes: Number,
    author: String,
    location: String,
    date: {
      day: Number,
      month: String,
    },
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("posts", Post);
