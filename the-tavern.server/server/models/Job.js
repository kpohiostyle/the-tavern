import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Answer = new Schema({
  body: { type: String, required: true },
  value: { type: String, required: true }
})

const SubJob = new Schema({
  body: { type: String, required: true },
  answers: [Answer]
})

const Background = new Schema({
  value: { type: String, required: true }
})

const Race = new Schema({
  body: { type: String, required: true },
  value: { type: String, required: true }
})

const Job = new Schema(
  {
    title: { type: String, required: true },
    // role (tank, healer, utility)
    role: { type: String, required: true },
    // style(weapons, balance, magic)
    style: { type: String, required: true },
    // NOTE races and subJobs are sub-docs
    races: [Race],
    backgrounds: [Background],
    subJobs: { SubJob }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
