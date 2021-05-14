import Swal from 'sweetalert2'

export default class Notification {
  /**
 *
 * @param {string} title The title text.
 * @param {string} text The body text.
 * @param {string} icon 'success', 'error', 'info', 'warning', or 'question'.
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

  // static async equipment(type) {
  //   const inputOptions = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({
  //         if(type === "Simple") {
  //         '#ff0000': 'Red',
  //         '#00ff00': 'Green',
  //         '#0000ff': 'Blue'
  //         }

  //       })
  //     }, 1000)
  //   })

  //   const { value: color } = await Swal.fire({
  //     title: `Select your ${type} Weapon`,
  //     input: 'radio',
  //     inputOptions: inputOptions,
  //     inputValidator: (value) => {
  //       if (!value) {
  //         return 'You need to choose something!'
  //       }
  //     }
  //   })

  //   if (color) {
  //     Swal.fire({ html: `You selected: ${color}` })
  //   }
  // }
}
