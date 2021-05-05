import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Race = new Schema({
  body: { type: String, required: true },
  value: { type: String, required: true }
})
Race.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
const SubJob = new Schema({
  body: { type: String, required: true },
  value: { type: String, required: true }
})
SubJob.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
// style(weapons, balance, magic)
const Job = new Schema(
  {
    // role (tank, healer, utility)
    role: { type: String, required: true },
    // style(weapons, balance, magic)
    style: { type: String, required: true },
    title: { type: String, required: true },
    creatorId: { type: String, ref: 'Account', required: true },
    // NOTE races and subJobs are sub-docs
    // background: { type: Array },
    races: [Race],
    subJobs: [SubJob]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Job.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Job
