const mongoose = require("mongoose");
const staticConfig = require("./../config/constant");

mongoose.connect(staticConfig.mongodbConnection);

const db = mongoose.connection;
const Schema = mongoose.Schema;

if (process.env.NODE_ENV !== "production") {
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log("连接成功");
  });
}

//Schemas here(all)

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  isCompile: Boolean,
  author: String
});

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  hobby: String,
  skill: {
    type: String,
    required: true
  }
});

const article = mongoose.model("article", articleSchema, "article");
const person = mongoose.model("person", personSchema, "person");

module.exports.articleModel = article;
module.exports.personModel = person;
