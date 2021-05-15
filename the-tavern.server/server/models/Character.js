import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Character = new Schema(
  {
    creatorId: { type: String, ref: 'Account' },
    role: { type: String },
    style: { type: String },
    job: { type: String },
    subJob: { type: String },
    race: { type: String },
    background: { type: String },
    name: { type: String, default: '' },
    age: { type: Number },
    gender: { type: String },
    alignment: { type: String },
    size: { type: String },
    speed: { type: Number },
    imgUrl: { type: String },
    health: { type: Number },
    armorRating: { type: Number },
    proBonus: { type: Number },
    scores: {
      type: Array,
      strength: {
        title: { type: String },
        value: { type: Number },
        mod: { type: Number }
      },
      dexterity: {
        title: { type: String },
        value: { type: Number },
        mod: { type: Number }
      },
      constitution: {
        title: { type: String },
        value: { type: Number },
        mod: { type: Number }
      },
      intelligence: {
        title: { type: String },
        value: { type: Number },
        mod: { type: Number }
      },
      wisdom: {
        title: { type: String },
        value: { type: Number },
        mod: { type: Number }
      },
      charisma: {
        title: { type: String },
        value: { type: Number },
        mod: { type: Number }
      }
    },
    languages: { type: Array },
    abilities: {
      type: Array,
      title: { type: String },
      body: { type: String }
    },
    spellcasting: {
      spellAbility: { type: String },
      totalSpells: { type: Number },
      spells: { type: Array },
      totalCantrips: { type: Number },
      cantrips: { type: Array },
      slots: { type: Number }
    },
    proficiencies: {
      weapons: { type: Array },
      armor: { type: Array },
      tools: { type: Array },
      skills: {
        type: Array,
        title: { type: String },
        expertise: { type: Boolean },
        saves: { type: Array }
      }
    },
    equipment: {
      weapons: { type: Array },
      armor: { type: Array },
      tools: { type: Array }
    }
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
