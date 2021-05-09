import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Weapon = new Schema(
  {
    category: { type: String },
    title: { type: String },
    value: {
      min: { type: Number },
      max: { type: Number }
    },
    properties: { type: Array }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Weapon
