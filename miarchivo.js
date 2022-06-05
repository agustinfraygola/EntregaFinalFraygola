const productos = [
  { comida: "Jamon y queso", precio: 60, stock: true,id:"radioJyQ" },
  { comida: "Carne", precio: 60, stock: true,id:"radioC" },
  { comida: "Queso y aceituna", precio: 62, stock: false,id:"radioQyA" },
]

const precios = {
  valor: 0,
  IVAinc: 0,
}

productos.push({ comida: "Cuatro quesos", precio: 66, stock: true,id:"radio4Q" },)

$( "#mostrarToggle" ).click(function() {
  $( "#menuToggle" ).toggle( "slow", function() {
  });
});



let textJQ = document.getElementById("listJQ")
let textC = document.getElementById("listC")
let textQA = document.getElementById("listQA")
let text4Q = document.getElementById("list4Q")

var originalTextJQ = "Jamon y queso (60$)"
var originalTextC = "Carne (60$)"
var originalTextQA = "Queso y aceituna (62$)"
var originalText4Q = "Cuatro quesos (66$)"

textJQ.onmouseover = function () {
  textJQ.innerHTML = "En stock"
}

textJQ.onmouseout = function () {
  textJQ.innerHTML = originalTextJQ
}

textC.onmouseover = function () {
  textC.innerHTML = "En stock"
}

textC.onmouseout = function () {
  textC.innerHTML = originalTextC

}

textQA.onmouseover = function () {
  textQA.innerHTML = "Sin stock"
}

textQA.onmouseout = function () {
  textQA.innerHTML = originalTextQA

}

text4Q.onmouseover = function () {
  text4Q.innerHTML = "En stock"
}

text4Q.onmouseout = function () {
  text4Q.innerHTML = originalText4Q

}

function valorEmpanada(cantidad, index) {
  return parseFloat(cantidad) * (productos[index].precio)
}

function obtenerRadioButtonCheck() {
  const radioGustosCheck= document.getElementsByClassName("radiobtn");
  for (let item of radioGustosCheck) {
    if (item.checked) {
      return item.id;
    }
  }
}

function calResult(){
  const empanadaSeleccionada = obtenerRadioButtonCheck();
  let productoResult = productos.find(producto => producto.id === empanadaSeleccionada);
  if (productoResult){
  const cantidadEmpanadas = parseInt(document.getElementById("cantidad").value);
  const precioTotal = cantidadEmpanadas*productoResult.precio;
  document.getElementById("valor").innerText = precioTotal;
  document.getElementById("IVAinc").innerText = precioTotal*1.22;
  }
}

document.getElementById("btnAnadir").addEventListener("click", calResult);
