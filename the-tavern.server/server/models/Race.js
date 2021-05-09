import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Race = new Schema(
  {
    title: { type: String },
    size: { type: String },
    speed: { type: Number },
    age: {
      min: { type: Number },
      max: { type: Number }
    },
    languages: {
      type: Array,
      choose: { type: Number },
      from: { type: Array }
    },
    proficiencies: {
      skills: {
        type: Array,
        choose: { type: Number },
        from: { type: Array }
      },
      armor: { type: Array },
      weapons: { type: Array },
      tools: { type: Array }
    },
    abilities: {
      type: Array,
      title: { type: String },
      body: { type: String },
      choose: { type: Number },
      from: { type: Array }
    },
    scores: {
      type: Array,
      title: { type: String },
      value: { type: Number },
      choose: { type: Number },
      from: { type: Array }
    }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Race
