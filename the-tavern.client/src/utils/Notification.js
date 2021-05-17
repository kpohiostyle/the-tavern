import Swal from 'sweetalert2'
import { AppState } from '../AppState'

export default class Notification {
  /**
 *
 * @param {string} title The title text.
 * @param {string} text The body text.question
 * @param {string} icon 'success', 'error', 'info', 'warning', or ''.
 * @param {string} confirmButtonText The text of your confirm button.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static async confirmAction(title = 'Final Answer?', text = 'Is this the answer you want to choose?', icon = 'warning', confirmButtonText = "I'm sure!") {
    try {
      const res = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#27ae60',
        cancelButtonColor: '#eb5757',
        confirmButtonText: confirmButtonText
      })
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  /**
 *
 * @param {string} title The title text
 * @param {string} display 'success', 'error', 'info', 'warning', or 'question'.
 * @param {string} position 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
 * @param {number} timer Time in milliseconds.
 * @param {boolean} progressBar Show progress bar or not respectively.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static toast(title = 'Warning!', display = 'warning', position = 'top-end', timer = 3000, progressBar = true) {
    Swal.fire({
      title: title,
      icon: display,
      position: position,
      timer: timer,
      timerProgressBar: progressBar,
      toast: true,
      showConfirmButton: false
    })
  }

  static async weaponChoice(type) {
    if (type === 'Martial') {
      const { value: weapon } = await Swal.fire({
        title: `Select your ${type} Weapon`,
        input: 'select',
        inputOptions: {
          Melee: {
            Battleaxe: 'Battleaxe',
            Flail: 'Flail',
            Glaive: 'Glaive',
            Greataxe: 'Greataxe',
            Greatsword: 'Greatsword',
            Lance: 'Lance',
            Longsword: 'Longsword',
            Maul: 'Maul',
            Morningstar: 'Morningstar',
            Pike: 'Pike',
            Rapier: 'Rapier',
            Scimitar: 'Scimitar',
            Shortsword: 'Shortsword',
            Trident: 'Trident',
            Warhammer: 'Warhammer',
            Whip: 'Whip'
          },
          Ranged: {
            Blowgun: 'Blowgun',
            HandCrossbow: 'Hand Crossbow',
            Shortbow: 'Shortbow',
            Sling: 'Sling'
          }
        },
        inputPlaceholder: 'Select a weapon',
        showCancelButton: true
      })

      if (weapon) {
        this.toast(`You chose a ${weapon}!`, 'success')
        // Swal.fire({
        //   icon: 'success',
        //   title: `You chose a ${weapon}!`,
        //   text: 'Quite a fine choice!'
        // })
        AppState.character.equipment.weapons.push(weapon)
      }
    } else if (type === 'Simple') {
      const { value: weapon } = await Swal.fire({
        title: 'Select field validation',
        input: 'select',
        inputOptions: {
          Melee: {
            Club: 'Club',
            Dagger: 'Dagger',
            Greatclub: 'Greatclub',
            Handaxe: 'Handaxe',
            Javelin: 'Javelin',
            LightHammer: 'Light Hammer',
            Mace: 'Mace',
            Quarterstaff: 'Quarterstaff',
            Sickle: 'Sickle',
            Spear: 'Spear',
            Rapier: 'Rapier',
            Scimitar: 'Scimitar',
            Shortsword: 'Shortsword',
            Trident: 'Trident',
            Warhammer: 'Warhammer',
            Whip: 'Whip'
          },
          Ranged: {
            LightCrossbow: 'Light Crossbow',
            Dart: 'Dart',
            Shortbow: 'Heavy Crossbow',
            Longbow: 'Longbow',
            Net: 'Net'
          }
        },
        inputPlaceholder: 'Select a weapon',
        showCancelButton: true
      })

      if (weapon) {
        this.toast(`You chose a ${weapon}!`, 'success')
        // Swal.fire({
        //   icon: 'success',
        //   title: `You chose a ${weapon}!`,
        //   text: 'Quite a fine choice!'
        // })
        AppState.character.equipment.weapons.push(weapon)
      }
    }
  }

  static async multiModal() {
    await Swal.mixin({
      title: "Don't forget personal information!",
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      progressSteps: [1, 2, 3, 4]
    }).queue([
      {
        title: "What is your character's name?",
        icon: 'question',
        text: 'Name...'
      },
      {
        title: 'How old is your character?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Age...',
        inputAttributes: {
          min: `${AppState.race.age.min}`,
          max: `${AppState.race.age.max}`,
          step: 1
        }
      },
      {
        title: "What is your character's gender?",
        icon: 'question',
        input: 'select',
        inputOptions: {
          Male: 'Male',
          NonBinary: 'Non-Binary',
          Female: 'Female'
        },
        inputPlaceholder: 'Gender...'
      },
      {
        title: "What is your character's alignment?",
        icon: 'question',
        input: 'select',
        inputOptions: {
          Lawful: {
            Lawful_Good: 'Good',
            Lawful_Neutral: 'Neutral',
            Lawful_Evil: 'Evil'
          },
          Neutral: {
            Neutral_Good: 'Good',
            True_Neutral: 'Neutral',
            Neutral_Evil: 'Evil'
          },
          Chaotic: {
            Chaotic_Good: 'Good',
            Chaotic_Neutral: 'Neutral',
            Chaotic_Evil: 'Evil'
          }
        },
        inputPlaceholder: 'Alignment...'
      }
    ]).then((result) => {
      if (result.value) {
        AppState.character.name = result.value[0]
        AppState.character.age = result.value[1]
        AppState.character.gender = result.value[2]
        AppState.character.alignment = result.value[3].replace('_', ' ')
      }
    })
  }

  static notify(str) {
    Swal.fire({
      icon: 'success',
      title: `${str}!`,
      text: 'Quite a fine choice!'
    })
  }
}
