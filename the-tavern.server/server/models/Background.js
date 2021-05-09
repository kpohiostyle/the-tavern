import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Background = new Schema(
  {
    title: { type: String, required: true },
    languages: {
      type: Array,
      choose: { type: Number },
      from: { type: Array }
    },
    proficiencies: {
      skills: { type: Array },
      tools: { type: Array }
    },
    equipment: {
      tools: { type: Array }
    }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Background
