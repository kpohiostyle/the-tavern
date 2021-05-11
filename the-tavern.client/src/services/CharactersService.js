import { AppState } from '../AppState'
// import { api } from './AxiosService'

class CharactersService {
  // async getCharacter(character) {
  //   const res = await api.get(`api/characters?title=${character.title}`)
  //   AppState.character = res.data[0]
  //   console.log(AppState.character)
  // }

  createCharacter() {
    const job = AppState.job
    AppState.character = {
      race: AppState.character.race,
      background: AppState.character.background,
      job: job.title,
      role: job.role,
      style: job.style,
      health: job.health,
      proBonus: 2,
      cantrips: job.spellcasting.cantripsRec,
      spells: job.spellcasting
        .spellsRec,
      slots: job.spellcasting.slots,
      proficiencies: job.proficiencies,
      equipment: job.equipment
    }
  }
}

export const charactersService = new CharactersService()
