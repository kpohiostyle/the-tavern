import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'

class CharactersService {
  async getCharacters(id) {
    const res = await api.get(`api/characters?creatorId=${id}`)
    AppState.characters = res.data
    console.log(AppState.characters)
  }

  getSkills() {
    const skills = AppState.character.proficiencies.skills
    for (let i = 0; i < skills.length; i++) {
      AppState.job.proficiencies.skills.from = AppState.job.proficiencies.skills.from.filter(s => s !== skills[i])
    }
  }

  createCharacter() {
    const job = AppState.job
    const race = AppState.race
    const background = AppState.background

    AppState.character = {
      name: '',
      age: null,
      gender: '',
      alignment: '',
      imgUrl: '',
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
      // languages: race.languages,
      // abilities: job.abilities,
      spellcasting: {
        spellAbility: job.spellcasting.ability,
        totalSpells: job.spellcasting.spells,
        spells: job.spellcasting.spellsRec,
        totalCantrips: job.spellcasting.cantrips,
        cantrips: job.spellcasting.cantripsRec,
        slots: job.spellcasting.slots
      },
      proficiencies: {
        weapons: job.proficiencies.weapons !== undefined ? job.proficiencies.weapons : [],
        armor: job.proficiencies.armor !== undefined ? job.proficiencies.armor : [],
        tools: job.proficiencies.tools !== undefined ? job.proficiencies.tools : [],
        skills: background.proficiencies.skills !== undefined ? background.proficiencies.skills : []
      },
      equipment: {
        weapons: [],
        armor: [],
        tools: job.tools
      }
    }
    console.log(AppState.character)
  }

  async saveCharacter(body) {
    await api.post('api/characters', body)
    router.push('Characters')
  }

  setActiveCharacter(id) {
    AppState.activeCharacter = AppState.characters.find(c => c.id === id)
  }
}

export const charactersService = new CharactersService()
