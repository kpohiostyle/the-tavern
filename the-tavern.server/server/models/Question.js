import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Answer = new Schema({
  body: { type: String, required: true },
  value: { type: String, required: true }
})
Answer.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
const Question = new Schema(
  {
    id: { type: Number, required: true },
    query: { type: String, required: true },
    answers: [Answer]

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Question.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Question
