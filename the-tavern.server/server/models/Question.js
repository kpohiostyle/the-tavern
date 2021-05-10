import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Question = new Schema(
  {
    number: { type: Number, required: true },
    query: { type: String, required: true },
    answers: {
      type: Array,
      body: { type: String, required: true },
      value: { type: String, required: true }
    }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Question
