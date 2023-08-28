/* js de notificaciones */
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

/* promesa y plantilla literaria de los productos con api fetch */

/* Promesa de la conexion con el json*/
var productosjson =  fetch('./assets/js/productos.json')
.then(response => response.json())
.then(data => {
    var array = Object.values(data);
    console.log(array);
    return array;
})
.catch(error => {
    console.log("Erro en la conexion con API", error);
})


/* funcion de lo plantilla literaria*/
