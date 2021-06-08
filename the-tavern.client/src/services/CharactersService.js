import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'

class CharactersService {
  async getCharacters(id) {
    const res = await api.get(`api/characters?creatorId=${id}`)
    AppState.characters = res.data
  }

  getSkills() {
    const skills = AppState.character.proficiencies.skills
    for (let i = 0; i < skills.length; i++) {
      AppState.job.proficiencies.skills.from = AppState.job.proficiencies.skills.from.filter(s => s !== skills[i])
    }
  }

  getAbilityModifiers() {
    const mods = AppState.race.scores
    mods.forEach(m => {
      if (m.choose === undefined) {
        AppState.character.scores[m.title.toLowerCase()].mod = m.value
      } else {
        AppState.count.mods += m.choose
        AppState.chooseScores = m.from
      }
    })
  }

  // getProficiencies(job, race, background) {
  //   AppState.proficiencies += {
  //     weapons: job.proficiencies.weapons !== undefined ? job.proficiencies.weapons : [],
  //     armor: job.proficiencies.armor !== undefined ? job.proficiencies.armor : [],
  //     tools: job.proficiencies.tools !== undefined ? job.proficiencies.tools : []
  //   }

  //   AppState.proficiencies += {
  //     weapons: race.proficiencies.weapons !== undefined ? race.proficiencies.weapons : [],
  //     armor: race.proficiencies.armor !== undefined ? race.proficiencies.armor : [],
  //     tools: race.proficiencies.tools !== undefined ? race.proficiencies.tools : [],
  //     skills: race.proficiencies.skills !== undefined ? race.proficiencies.skills : []
  //   }

  //   AppState.proficiencies += {
  //     weapons: background.proficiencies.weapons !== undefined ? background.proficiencies.weapons : [],
  //     armor: background.proficiencies.armor !== undefined ? background.proficiencies.armor : [],
  //     tools: background.proficiencies.tools !== undefined ? background.proficiencies.tools : [],
  //     skills: background.proficiencies.skills !== undefined ? background.proficiencies.skills : []
  //   }
  //   console.log(AppState.proficiencies)
  // }

  // getLanguages() {
  //   const race = AppState.race
  //   const background = AppState.background
  //   // const languages = AppState.character.languages
  //   if (race.languages[race.languages.length - 1].from !== undefined && background.languages[0]) {
  //     AppState.languages.from = race.languages[race.languages.length - 1].from
  //     AppState.languages.choose += race.languages[race.languages.length - 1].choose + background.languages[0].choose
  //     console.log(AppState.languages.from)
  //   } else if (race.languages[race.languages.length - 1].from !== undefined) {
  //     AppState.languages.from = race.languages[race.languages.length - 1].from
  //     AppState.languages.choose += race.languages[race.languages.length - 1].choose
  //     console.log(AppState.languages.from)
  //   } else if (background.languages[0]) {
  //     AppState.languages.from = background.languages[0].from
  //     AppState.languages.choose += race.languages[race.languages.length - 1].choose
  //     console.log(AppState.languages.from)
  //   }
  //   // if (race.languages.choose) {
  //   //   race.languages.from.forEach(l => AppState.languages.from.push(l))
  //   //   choose += race.languages.choose
  //   // }
  //   // if (background.languages.choose) {
  //   //   choose = +background.languages.choose
  //   // }
  //   // for (let i = 0; i < languages.length; i++) {
  //   //   AppState.languages.from = AppState.languages.from.filter(l => l !== languages[i])
  //   // }
  //   // AppState.languages.choose = choose
  // }

  createCharacter() {
    const job = AppState.job
    const race = AppState.race
    const background = AppState.background
    const proficiencies = AppState.proficiencies

    // this.getProficiencies(job, race, background)

    AppState.character = {
      name: '',
      age: null,
      gender: '',
      alignment: '',
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
      imgUrl: 'http://www.fillmurray.com/g/300/300',
      scores: AppState.characterScores,
      languages: race.languages,
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
        weapons: proficiencies.weapons !== undefined ? proficiencies.weapons : [],
        armor: proficiencies.armor !== undefined ? proficiencies.armor : [],
        tools: proficiencies.tools !== undefined ? proficiencies.tools : [],
        skills: proficiencies.skills !== undefined ? proficiencies.skills : [],
        saves: []
      },
      equipment: {
        weapons: [],
        armor: [],
        tools: job.tools
      }
    }
  }

  async saveCharacter(body) {
    AppState.activeCharacter = AppState.character
    await api.post('api/characters', body)
    router.push('Account')
  }

  setActiveCharacter(id) {
    AppState.activeCharacter = AppState.characters.find(c => c.id === id)
  }

  async editName(body) {
    await api.put(`api/characters/${body.id}`, body)
  }
}

export const charactersService = new CharactersService()
