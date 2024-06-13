
const verificar = (id) => {
  const input = document.getElementById(id)
  const div = document.getElementById('e-' + id)
  input.classList.remove('is-invalid')

  if (input.value.trim() == '') {
    input.classList.add('is-invalid')
    div.innerHTML = '<span class="badge bg-danger">El campo es obligatorio</span>'
  }

  input.classList.remove('is-invalid')
    if (input.value.trim() == '') {
        input.classList.add('is-invalid')
        div.innerHTML = '<span class="badge bg-danger">El campo es obligatorio</span>'
    } {
    input.classList.add('is-valid')
    div.innerHTML = ''

    if (id === 'run') {
      if (!validarRun(input.value)) {
        input.classList.add('is-invalid')
        div.innerHTML =
          '<span class="badge bg-danger">RUN INVALIDO INTENTE NUEVAMENTE</span>'
      }
    }

    if (id === 'nombre') {
      if (!validarNombre(input.value)) {
        input.classList.add('is-invalid')
        div.innerHTML =
          '<span class="badge bg-danger">Nombre INVALIDA INTENTE NUEVAMENTE</span>'
      }
    }

    if (id === 'apellido') {
      if (!validarApellido(input.value)) {
        input.classList.add('is-invalid')
        div.innerHTML =
          '<span class="badge bg-danger">Apellido INVALIDO INTENTE NUEVAMENTE</span>'
      }
    }

    if (id == 'email') {
      if (!validaEmail(input.value)) {
          input.classList.add('is-invalid')
          div.innerHTML = '<span class="badge bg-danger">El email no tiene el formato correcto</span>'

      }
  }
    if (id === 'fecha') {
      if (!validarFecha(input.value)) {
        input.classList.add('is-invalid')
        div.innerHTML =
          '<span class="badge bg-danger">Fecha INVALIDA INTENTE NUEVAMENTE</span>'
      }
    }

  }
}

const limpiar = () => {
  document.querySelector('form').reset()
  document.querySelectorAll('.form-control').forEach((item) => {
    item.classList.remove('is-invalid')
    item.classList.remove('is-valid')
    document.getElementById('e-' + item.name).innerHTML = ''
  })
  document.getElementById('run').readOnly = false
  document.getElementById('btnGuardar').value = 'Guardar'
}

const validarNumero = (evt) => {
  if (evt.keyCode >= 48 && evt.keyCode <= 57) return true
  return false
}

const validarNombre = (modelo) => {
  return modelo.length > 2
}

const validarFecha = (fecha) => {
  const hoy = new Date()
  fecha = new Date(fecha)
  const resta = hoy - fecha
  
  const dia = (resta / (1000 * 60 * 60 * 24))
 
  return dia.toFixed(0)
}


const validarApellido = (nombre) => {
  return nombre.length > 2
}
const validaEmail = (email) => {
  const formato = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  if (!formato.test(email))
      return false
  return true
}

const validarRun = (run) => {
  const Fn = {
    validaRut: function (rutCompleto) {
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false
      const tmp = rutCompleto.split('-')
      const digv = tmp[1]
      const rut = tmp[0]
      if (digv == 'K') digv = 'k'
      return Fn.dv(rut) == digv
    },
    dv: function (T) {
      let M = 0,
        S = 1
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11
      return S ? S - 1 : 'k'
    },
  }
  return Fn.validaRut(run)
}
