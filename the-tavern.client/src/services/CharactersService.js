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
    const race = AppState.race
    const background = AppState.background
    AppState.character = {
      role: job.role,
      style: job.style,
      job: job.title,
      subJob: job.subJobs.title,
      race: race.title,
      background: background.title,
      size: race.size,
      speed: race.speed,
      health: job.health,
      proBonus: 2,
      scores: race.scores,
      languages: race.languages,
      abilities: job.abilities,
      spellcasting: {
        spellAbility: job.spellcasting.ability,
        totalSpells: job.spellcasting.spells,
        spells: job.spellcasting.spellsRec,
        totalCantrips: job.spellcasting.cantrips,
        cantrips: job.spellcasting.cantripsRec,
        slots: job.spellcasting.slots
      },
      proficiencies: job.proficiencies,
      equipment: {
        weapons: [],
        armor: [],
        tools: job.tools
      }
    }
    console.log(AppState.character)
  }
}

export const charactersService = new CharactersService()
