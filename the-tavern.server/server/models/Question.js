import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Answer = new Schema({
  body: { type: String, required: true },
  value: { type: String, required: true }
})

const Question = new Schema(
  {
    number: { type: Number, required: true },
    query: { type: String, required: true },
    answers: [Answer]

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Question
