const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reaction');
const reactionsSchema = require('./Reaction');

// Schema to create thought model
const thoughtsSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
      max_length: 200,
    },
    // last: {
    //   type: String,
    //   required: true,
    //   max_length: 200,
    // },
    // github: {
    //   type: String,
    //   required: true,
    //   max_length: 200,
    // },
    reactions: [reactionsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
// Thoughts