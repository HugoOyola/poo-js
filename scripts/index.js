import Curso from "./classes/Curso.js";

// Instanciando objetos de la clase Curso
const html = new Curso("HTML desde Cero", "../img/curso-html.jpg", 10)
const css = new Curso("CSS desde Cero", "../img/curso-css.jpg", 20)
// console.log(html)

const elem = document.getElementById("cursos")

// Imprime cursos en el DOM
// Recibe un Objeto del tipo Curso
function mostrarCurso(curso) {
  const hijo = document.createElement('div')
  hijo.innerHTML = `
    <img src="${curso.getPoster()}" alt="">
    <h1>${curso.getNombre()}</h1>
    <span>Cantidad de Clases: ${curso.getSesiones()} sesiones</span>
  `
  elem.appendChild(hijo)
}

// Llamada a la funcion curso
mostrarCurso(html)
mostrarCurso(css)