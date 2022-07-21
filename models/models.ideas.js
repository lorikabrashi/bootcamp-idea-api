const mongoose = require('mongoose')

const ideaSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    votes: {
      upVote: { type: Number, default: 0 },
      downVote: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Ideas', ideaSchema)
