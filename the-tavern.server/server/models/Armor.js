import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Armor = new Schema(
  {
    category: { type: String },
    title: { type: String },
    value: {
      min: { type: Number },
      max: { type: Number }
    },
    strength: { type: Number },
    stealth: { type: Boolean }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Armor
