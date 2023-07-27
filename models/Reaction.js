const { Schema, Types } = require('mongoose');
const moment = require('moment');
const formatMyDate = (date) => moment(date).format('MMMM Do YYYY, h:mm:ss a');

const reactionsSchema = new Schema(
  {
    reactionsId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default:Date.now,
      get: timeStamp=>formatMyDate(timeStamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


module.exports = reactionsSchema; // reactions