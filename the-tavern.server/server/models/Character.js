import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Item = new Schema({
  title: { type: String }
})

const Spell = new Schema({
  level: { type: Number },
  uses: { type: Number },
  title: { type: String }
})

const Skill = new Schema({
  title: { type: String },
  expertise: { type: Boolean }
})

const Proficiency = new Schema({
  weapons: [Item],
  armor: [Item],
  tools: [Item],
  skills: [Skill]
})

const Stat = new Schema({
  title: { type: String },
  value: { type: Number }
})

const Ability = new Schema({
  title: { type: String },
  body: { type: String }
})

const Character = new Schema(
  {
    creatorId: { type: String, ref: 'Account', required: true },
    role: { type: String },
    style: { type: String },
    job: { type: String, required: true },
    race: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    alignment: { type: String, required: true },
    size: { type: String, required: true },
    speed: { type: String, required: true },
    imgUrl: { type: String },
    background: { type: String },
    health: { type: Number },
    armorRating: { type: Number },
    proBonus: { type: Number },
    stats: [Stat],
    languages: [Item],
    abilities: [Ability],
    spells: [Spell],
    slots: [Spell],
    proficiencies: [Proficiency],
    equipment: [Proficiency]
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
