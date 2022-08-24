import Curso from "./classes/Curso.js";
import Profesor from "./classes/Profesor.js";
import Alumno from "./classes/Alumno.js";

// Instanciando objetos de la clase Curso
// const html = new Curso("HTML desde Cero", "../img/curso-html.jpg", 10, "Hugo Oyola Yarlaque");
// const css = new Curso("CSS desde Cero", "../img/curso-css.jpg", 30, "Jose Maria Oyola Serquén");
// const git = new Curso("GIT y GitHub", "../img/curso-git.jpg", 15, "Andy Vilchez Carranza");
// const angular = new Curso("Angular", "../img/curso-angular.jpg", 40, "Miguel Cruz Sanchez");
// const vue = new Curso("VueJS", "../img/curso-vue.jpg", 35, "Jose Maria Oyola Serquén");
// console.log(html)

const elem = document.getElementById("cursos");

// Imprime cursos en el DOM
// Recibe un Objeto del tipo Curso
function mostrarCurso(curso) {
  const hijo = document.createElement("div");
  hijo.classList.add("card");
  hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="${curso.getPoster()}" alt="${curso.getNombre()}">
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
      <div class="s-mb-2 s-main-center">
        <div class="card__teacher s-cross-center">
          <div class="card__avatar s-mr-1">
            <div class="circle img-container">
              <img src="../img/avatar/avatar-male.png" alt="">
            </div>
          </div>
          <span class="small">Docente <br> ${curso.getSesiones()} sesiones</span>
        </div>
      </div>
      <div class="s-main-center">
        <a class="button--ghost-alert button--tiny" href="#">$ 20USD</a>
      </div>
    </div>
  `;
  elem.appendChild(hijo);
}

// Llamada a la funcion curso
// mostrarCurso(html);
// mostrarCurso(css);
// mostrarCurso(git);
// mostrarCurso(angular);
// mostrarCurso(vue);

const formulario = document.getElementById("formCursos");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const target = e.target;
  const curso = new Curso(target.nombreCurso.value, target.imagenCurso.value, target.sesionesCurso.value);
  mostrarCurso(curso);
  formulario.reset();
});

const doc = new Profesor("Hugo Hamilton", "Oyola Yarlaque", 30, "hoyola@campus.edu.pe", true, ["HTML desde Cero", "CSS desde Cero"]);
//console.log(doc)

const alumno1 = new Alumno("Shirley", "Serquén Bravo", 31, "sbravos@campus.edu.pe", false, ["HTML desde Cero", "CSS desde Cero"]);
const alumno2 = new Alumno("Alexia", "Oyola Serquén", 18, "aoyolas@campus.edu.pe", true, ["Angular desde Cero", "CSS desde Cero"]);
console.log(alumno2)

const html = new Curso("HTML desde Cero", "../img/curso-html.jpg", 10);
html.setInscritos([...html.getInscritos(), alumno1]);
console.log(html);
