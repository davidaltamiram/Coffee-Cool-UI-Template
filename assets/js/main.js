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

const divProductos = document.getElementById("ProductosCafe");

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
});
/*fin de la promesa*/

/*inicio de la funcion con la plantilla literaria de cada producto*/
function PlantillaProducto (cafes) {
  cafes.then(array =>{

   array.forEach(function(objeto){
    var productos = document.createElement("div");
    productos.classList = "col-5 p-2";

    productos.innerHTML = `
      <div class="row">
        <div class="card cardblur">
            <img src="${objeto.img}" class="card-img-top imgSize" alt="...">
              <div class="col-12">
                <div class="row justify-content-start">
                    <div class="col-12">
                      <a class="text-light textCard">${objeto.nombre}</a>
                    </div>
                    <p class="text-light textCard">${objeto.extra}</p>
                </div>
              </div>

                <div class="col-12 col-sm-12">
                    <div class="row justify-content-around">
                        <div class="col-6 col-sm-6">
                            <p class="text-light textPrice">$${objeto.precio}</p>
                        </div>
                        <div class="col-6 col-sm-6">
                            <p class="card cardButton text-center"  id="liveToastBtn${objeto.id}">
                                Add
                            </p>
                        </div>
                    </div>
                </div>
        </div>
      </div>

      <div class="toast-container position-fixed top-0 end-0 p-3">
        <div id="liveToast${objeto.id}" class="toast notificacion" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header text-light bg-dark">
            <i class="fa-solid fa-mug-saucer"></i>
            <strong class="me-auto"></strong>
            <small>product added</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body text-center">
            ${objeto.nombre} ${objeto.extra}
          </div>
        </div>
      </div>
    `;

    divProductos.appendChild(productos);

    var liveToastBtn = document.getElementById(`liveToastBtn${objeto.id}`);
    var liveToast = new bootstrap.Toast(document.getElementById(`liveToast${objeto.id}`));
    liveToastBtn.addEventListener('click', function() {
      liveToast.show();

    });
   });

  });
}

document.addEventListener("DOMContentLoaded", function() {
  PlantillaProducto(productosjson);
});
/* fin de funcion de lo plantilla literaria*/
