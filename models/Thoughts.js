const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reaction');
const moment = require('moment');

const formatMyDate = (date) => moment(date).format('MMMM Do YYYY, h:mm:ss a');


// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length:1,
    },
    createdAt: {
      type: Date,
      default:Date.now,
      get: timeStamp=>formatMyDate(timeStamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


thoughtSchema.virtual("reactionCount").get(function(){
  return this.reactions.length;
})
const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;
// Thoughts