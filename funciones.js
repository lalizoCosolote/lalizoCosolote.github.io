import { edit, getAll, remove, save, selectOne  } from './firebase.js'

document.getElementById('btnGuardar').addEventListener('click', () => {
  document.querySelectorAll('.form-control').forEach(item => {
      verificar(item.id)
  })
  if (document.querySelectorAll('.is-invalid').length == 0) {
      const citas = {
      run: document.getElementById('run').value,
      Nombre: document.getElementById('nombre').value,
      Apellido: document.getElementById('apellido').value.trim(),
      Email: document.getElementById('email').value,
      Numero: document.getElementById('numero').value,
      Fecha: document.getElementById('fecha').value,
  }
  if (document.getElementById('btnGuardar').value == 'Guardar') {
      save(citas)
    }   else {
      edit(id, citas)
      id = 0
    }
  limpiar()
}
})

window.addEventListener('DOMContentLoaded', () => {
  getAll((citas) => {
      let tabla = ''
      citas.forEach((doc) => {
        const item = doc.data()
      
      
        tabla += `<tr>
                <td>${item.run}</td>
                <td>${item.Nombre}</td>
                <td>${item.Apellido}</td>
                <td>${item.Email}</td>
                <td>${item.Numero}</td>
                <td>${item.Fecha}</td>
                <td nowrap>
                    <button class="btn btn-danger" data-id="${item.id}">Eliminar</button>
                    <button class="btn btn-warning" id="${doc.id}">Editar</button>
                </td>
         </tr>`
    })
      document.getElementById('contenido').innerHTML = tabla

      document.querySelectorAll('.btn-danger').forEach((btn) => {
       btn.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id')
         Swal.fire({
           title: '¿Seguro que deseas borrarlo?',
           text: 'Esta acción no se puede deshacer',
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, bórralo',
         }).then((result) => {
           if (result.isConfirmed) {
              remove(id)
             Swal.fire('Borrado', 'El registro ha sido borrado.', 'success')
            }
         })
       })
     })
    })
    document.querySelectorAll('.btn-warning').forEach(btn => {
   
      btn.addEventListener('click', async () => {
       
         const emp = await selectOne(btn.id)
     
          const item = emp.data()
       
          document.getElementById('run').value = item.run
          document.getElementById('nombre').value = item.nom
         document.getElementById('apellido').value = item.ape
          document.getElementById('email').value = item.email
          document.getElementById('numero').value = item.numero
          document.getElementById('fecha').value = item.fecha
          document.getElementById('btnGuardar').value = 'Editar'
          document.getElementById('run').readOnly = true
          id = btn.id
      })
  })

})

