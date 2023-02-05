const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  recipe: { type: String, required: true },
  pic: { type: String, default: "http://placekitten.com/350/350" },
  cuisines: { type: String, required: true },
  prepmethod: { type: String, default: "Lorem Ipsum" },
  cooktime: { type: String, default: "1min", required: true },
  yield: {
    type: Number,
    min: [0, "What is it good for then?"],
    max: [80, "Are we feeding an army?"],
    required: true,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

recipeSchema.methods.showSnippet = function () {
  return `${this.recipe} takes ${this.cooktime} to prepare and serves ${this.yield}.`;
};

module.exports = mongoose.model("Recipes", recipeSchema);