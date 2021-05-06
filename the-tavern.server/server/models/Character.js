import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Character = new Schema(
  {
    creatorId: { type: String, ref: 'Account', required: true },
    job: { type: String, required: true },
    race: { type: String, required: true },
    charName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    alignment: { type: String, required: true },
    imgUrl: { type: String }
    // background: { type: String },
    // abilities: { type: Object },
    // proficiencies: { type: Object },
    // stats: { type: Object },
    // skills: { type: Array },
    // equipment: { type: Object }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Character.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Character
