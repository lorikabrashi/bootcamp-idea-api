const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    ides: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ideas' }],
    votes: [
      {
        idea: { type: mongoose.Schema.Types.ObjectId, ref: 'Ideas' },
        vote: { type: String, enum: ['UP_VOTE', 'DOWN_VOTE'] },
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Users', userSchema)
