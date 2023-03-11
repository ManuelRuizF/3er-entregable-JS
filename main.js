let imagenregalo= [
    {
        id:1,
        nombre: "Toallas",
        precio: 50,
        imagen: "./imagenes/regaloboda1.jpg",
    },

    {
        id:2,
        nombre: "Una Lavadora",
        precio: 100,
        imagen: "./imagenes/regaloboda2.jpg",
    },

    {
        id:3,
        nombre: "Una Lavadora",
        precio: 300,
        imagen: "./imagenes/regaloboda3.jpg",
    },

    {
        id:4,
        nombre: "Una Secadora",
        precio: 250,
        imagen: "./imagenes/regaloboda4.jpg",
    },

    {
        id:5,
        nombre: "Juego de platos y vasos",
        precio: 150,
        imagen: "./imagenes/regaloboda5.jpg",
    },
]


const pictures = document.getElementById("container");
imagenregalo.forEach((producto, indice)=>{
let card= document.createElement("div");
card.classList.add("card","col-sm-12", "col-lg-4")
card.innerHTML= ` <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#cart" class="btn btn-success" onClick="AgregarAlCarrito(${indice})">AGREGAR</a>
    </div>`;
        pictures.appendChild(card);
});

let botonagregar = document.querySelectorAll('#boton-compraz');
console.log(botonagregar);

botonagregar.forEach((e)=>{
    e.addEventListener('click', ()=>{
        Toastify({
            text: 'Articulo agregado',
            duration: 3000,
            position: 'left',
            gravity: 'bottom',
            
          }).showToast()
        console.log("artículo agregado");
    })
})

//_------------------------------------------------------------------------------------------------------------------------

let carritoArray =[];

if (localStorage.getItem("carrito")){
    carritoArray = JSON.parse(localStorage.getItem("carrito"))
    crearCarrito();
}
//-------------------------------------------------------------------------------------------------------------------

const AgregarAlCarrito = (indice) => {
    const ProductoClickeado = carritoArray.findIndex((elemento)=>{
        return elemento.id === productos[indice].id;
    });
    if (ProductoClickeado === -1) {
        const productoAgregado = productos[indice];
        productoAgregado.cantidad = 1;
        carritoArray.push(productoAgregado);
        actualizarStorage()
        crearCarrito();

    }
        else{
        carritoArray[ProductoClickeado].cantidad += 1;
        actualizarStorage();
        crearCarrito();    
        }
};


const actualizarStorage = (carritoArray)=>{
    localStorage.setItem("carrito", JSON.stringify(carritoArray))
}

const EliminarProducto =  (indice) => {
    carritoArray.splice(indice,1)
    actualizarStorage();
    AgregarAlCarrito(); 
}














let opcionCarrito = document.getElementById("cart");

const crearCarrito = ()=>{
    opcionCarrito.className = "cart"
    opcionCarrito.innerHTML = ""
    carrito.forEach((producto, indice)=>{
    const carritocontainer = document.createElement("div")
    carritocontainer = document.className("producto-carrito");
    carritocontainer.innerHTML= `<img class="car-img" src=" ${producto.imagen} "/>
    <div class="product-details>"
     ${producto.nombre}
     </div>
     <div class= "product-details" > Cantidad: ${producto.cantidad}</div>
     <div class="product-details> Precio: $ ${producto.precio}</div>
     <div class="product-details> Subtotal: $ ${
        producto.precio * producto.cantidad
     } </div>
     <button class= "btn btn-success" id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>`
    })
    opcionCarrito.appendChild(carritocontainer)
}



/*

//-----------------------------------------------------------------------------------------------

function localizador() {
    nombre = prompt("¡Bienvenido a Regalaboda.com! \n Introduzca su nombre");
}

//----------------------------------------------------------------------------------------------
class Boda {
    constructor(novio, novia) {
      this.novio = novio;
      this.novia = novia;
    }
  }
//---------------------------------------------------------------------------------------------

let bodaArray = [
    {novio:"Juan Martínez", novia:"María Tagliafico"},
    {novio: "Gabriel Hernández", novia: "Ana Elena Mendiburu "},
    {novio: "Martín Messi", novia: "Josefina Mendiburu"},

];
//--------------------------------------------------------------------------------------------

function Agregarboda(){
    
    let novio = prompt("Ingrese el nombre del novio ");
    let novia = prompt("Ingrese el nombre de la novia ");
  
    let nuevaBoda = new Boda(novio, novia);
    bodaArray.push(nuevaBoda);
  
    console.log(bodaArray); 
    alert(`${nombre}, Bienvenido a la mesa de regalos de ${nuevaBoda.novio} y ${nuevaBoda.novia}`);
}

 //--------------------------------------------------------------------------------------------   

function ElegirBoda (){
    let opcionboda= prompt(`¡Hola ${nombre}!
    Elija la boda deseada:
        1) ${bodaArray[0].novia} y ${bodaArray[0].novio}
        2) ${bodaArray[1].novia} y ${bodaArray[1].novio}
        3) ${bodaArray[2].novia} y ${bodaArray[2].novio}
        4) Agregar Boda`);

        switch(opcionboda) {
            case "1" :
                bodaElegida =  `${bodaArray[0].novia} y ${bodaArray[0].novio}` ;
                alert(`${nombre}, Bienvenido a la boda de  ${bodaArray[0].novia} y ${bodaArray[0].novio}.`);
                break;
            case "2" :
                bodaElegida =  `${bodaArray[1].novia} y ${bodaArray[1].novio}` ;
                alert(`${nombre}, Bienvenido a la boda de  ${bodaArray[1].novia} y ${bodaArray[1].novio}.`);
                break; 
            case "3" :
                bodaElegida =  `${bodaArray[2].novia} y ${bodaArray[2].novio}` ;
                alert(`${nombre}, Bienvenido a la boda de  ${bodaArray[2].novia} y ${bodaArray[2].novio}.`);
                break;   
            case "4" :
                Agregarboda();
                break;                        

            }
 
}

//-------------------------------------------------------------------------------------------------------------------

class regalillo {
    constructor(tipo, comprado, precio){
        this.tipo=tipo;
        this.comprado=comprado;
        this.precio= precio;
    }
}


let regalosArray= [
    {tipo: "Toallas para la casa", comprado: "5", precio:"$50 USD"},
    {tipo: "Utencilios de cocina", comprado: "2", precio:"$100 USD"},
    {tipo: "La Lavadora", comprado: "0", precio:"$300 USD"},
    {tipo: "Secadora", comprado: "1", precio:"$250 USD"},
    {tipo: "Juego de platos y vasos", comprado: "7", precio:"$150 USD"},
]



//------------------------------------------------------------------------------------------------------------------------------------

function comprar() {
         
           
    regalo = prompt("Escoger el número del regalo \n 1) Toallas para la casa ($50 USD) \n 2) Juego de utencilios de cocina ($100 USD) \n 3) Lavadora ($300 USD) \n 4) Secadora ($250 USD) \n 5) Juego de platos y vasos ($150 USD)")
    
        switch(regalo) {
            case "1" :
                carrito.push(regalosArray[0]) ;
                alert("Las toallas para la casa se han agregado a su carrito");
                break;
            case "2" :
                carrito.push(regalosArray[1]) ;
                alert("Los utencilios de cocina se han agregado a su carrito");
                break; 
            case "3" :
                carrito.push(regalosArray[2]) ;
                alert("La lavadora se ha agregado a su carrito");
                break;   
            case "4" :
                carrito.push(regalosArray[3]) ;
                alert("La secadora se ha agregado a su carrito");
                break; 
            case "5" :
                carrito.push(regalosArray[4]);
                alert("El juego de platos y vasos se ha agregado a su carrito"); 
                break; }
        }

//-------------------------------------------------------------------------------------------------------

function verCarrito (){
        carrito.forEach((element) => {
             alert(`Usted he elegido ${element.tipo} con un precio de ${element.precio}`)
        });

    }
//-----------------------------------------------------------------------------------------------------------

function msj() {
        mensaje = prompt(" Deje un mensaje para los novios");
    }

//----------------------------------------------------------------------------------------------------------
function recom (){
    const mejorseleccion= regalosArray.filter((vendidas)=> vendidas.comprado === "0"); 
    for (const miseleccion of mejorseleccion){
        alert(`Le recomendamos comprar ${miseleccion.tipo} , ya que solo tiene ${miseleccion.comprado} ventas.`)
    }
}

let mensaje;
let regalo;
let carrito = [];       
let nombre;
let bodaElegida;


localizador();
ElegirBoda();

let opcion= prompt(`Elija las siguientes opciones:
1) Elegir regalo
2) Recomendación de Regalo
3) Ver Carrito de compras
4) Dejar un mensaje
5) Salir`)

while (opcion !== "5"){
    if (opcion === "1"){
        comprar();
    }
    if (opcion ==="2"){
        recom();
    }
    if (opcion === "3"){
        verCarrito();
    }
    if (opcion === "4"){
        msj();
    }
    opcion= prompt (`Vuelva a ingresar una opción:
    1) Elegir regalo
    2) Recomendacion de compra
    3) Ver Carrito de compras
    4) Dejar un mensaje
    5) Salir`);
}



alert(`Muchas gracias, su pedido está en camino con el siguiente mensaje:
${mensaje}`);

*/