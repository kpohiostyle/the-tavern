import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import JobSchema from '../models/Job'
import QuestionSchema from '../models/Question'
import CharacterSchema from '../models/Character'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Jobs = mongoose.model('Value', JobSchema);
  Questions = mongoose.model('Value', QuestionSchema);
  Characters = mongoose.model('Value', CharacterSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
