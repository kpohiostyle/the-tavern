import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Equipment = new Schema({
  armor: {
    type: Array,
    title: { type: String },
    armor: {
      min: { type: Number },
      max: { type: Number }
    },
    properties: { type: Array }
  },
  weapon: {
    type: Array
  }
})

const Choice = new Schema({
  type: Array,
  first: [Equipment],
  second: [Equipment],
  third: [Equipment]
})

const SubJob = new Schema({
  title: { type: String },
  abilities: {
    type: Array,
    title: { type: String },
    body: { type: String }
  },
  proficiencies: {
    skills: { type: Array },
    armor: { type: Array },
    weapons: { type: Array }
  }
})

const Job = new Schema(
  {
    title: { type: String },
    // role (tank, healer, utility)
    role: { type: String },
    // style(weapons, balance, magic)
    style: { type: String },
    // NOTE races and subJobs are sub-docs
    races: { type: Array },
    backgrounds: { type: Array },
    health: { type: Number },
    proficiencies: {
      skills: {
        choose: { type: Number },
        from: { type: Array }
      },
      armor: { type: Array },
      weapons: { type: Array },
      tools: { type: Array },
      saves: { type: Array }
    },
    abilities: {
      type: Array,
      title: { type: String },
      body: { type: String },
      choose: { type: Number },
      from: { type: Array }
    },
    spellcasting: {
      ability: { type: String },
      slots: { type: Number },
      spells: { type: Number },
      cantrips: { type: Number }
    },
    subChoices: {
      query: { type: String },
      answers: {
        type: Array,
        body: { type: String },
        value: { type: String }
      }
    },
    tools: { type: Array },
    equipment: {
      type: Array,
      choices: [Choice]
    },
    subJobs: [SubJob]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
