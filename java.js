alert("bienvenidos al sitio")
const nombre = prompt("¿cual es tu nombre");
const saludo = "Hola " + nombre
alert(saludo)
const edad = prompt("¿cual es tu edad?");
alert(edad)
const diasDelAño= 365 
const dias = edad * diasDelAño
alert("dias vividos " + dias)
console.log(nombre + " " + edad + " años" + " tus dias vividos son " + dias)

const viviras= prompt("¿hasta que edad crees que viviras?");
const edadMaxima= edad - viviras
alert("te quedan " + edadMaxima + " años")
const snack= prompt("¿cual es tu snack favorito");
const comer = 3
const porcomer= edadMaxima
const valor= 1000
alert("necesitas " + porcomer + valor + snack )
const total = (porcomer*valor*comer*365)

alert("gastara en " + snack + "$" + total)