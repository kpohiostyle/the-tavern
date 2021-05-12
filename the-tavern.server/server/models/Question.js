import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Question = new Schema(
  {
    type: { type: String },
    number: { type: Number },
    query: { type: String },
    answers: {
      type: Array,
      body: { type: String },
      value: { type: String }
    }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Question
