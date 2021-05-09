import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Item = new Schema({
  title: { type: String }
})

const Option = new Schema({
  title: { type: String },
  body: { type: String },
  value: { type: String },
  choose: { type: Number },
  from: [Item]
})

const Choice = new Schema({
  title: { type: String },
  options: [Option]
})

const SubJob = new Schema({
  title: { type: String },
  level: { type: Number },
  equipment: [Option],
  abilities: [Option],
  proficiencies: [Choice]
})

const Job = new Schema(
  {
    title: { type: String, required: true },
    // role (tank, healer, utility)
    role: { type: String, required: true },
    // style(weapons, balance, magic)
    style: { type: String, required: true },
    // NOTE races and subJobs are sub-docs
    races: [Option],
    backgrounds: [Item],
    subChoices: { Choice },
    hp: { type: Number },
    proficiencies: [Choice],
    equipment: [Option],
    abilities: [Option],
    spellcasting: { type: String },
    subJobs: [SubJob]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
