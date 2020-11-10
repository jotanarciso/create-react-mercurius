import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export class NotificationService {

  constructor() {
    window.alert = message => this.info(message)
  }

  success(text) {
    Toast.fire({
      icon: 'success',
      title: 'Ok!',
      text
    })
  }

  error(text) {
    Toast.fire({
      icon: 'error',
      title: 'Ops!',
      text
    })
  }

  warn(text) {
    Toast.fire({
      icon: 'warning',
      title: 'Atenção!',
      text
    })
  }

  info(text) {
    Toast.fire({
      icon: 'info',
      title: 'Atenção!',
      text
    })
  }

}