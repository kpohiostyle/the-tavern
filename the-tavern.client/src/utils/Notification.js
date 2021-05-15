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
        title: 'Select field validation',
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
        Swal.fire({
          icon: 'success',
          title: `You chose a ${weapon}!`,
          text: 'Quite a fine choice!'
        })
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
        Swal.fire({
          icon: 'success',
          title: `You chose a ${weapon}!`,
          text: 'Quite a fine choice!'
        })
        AppState.character.equipment.weapons.push(weapon)
      }
    }
  }

  static notify(str) {
    Swal.fire({
      icon: 'success',
      title: `${str}!`,
      text: 'Quite a fine choice!'
    })
  }
}
