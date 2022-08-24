import Usuario from "./Usuario.js";

export default class Profesor extends Usuario {
  constructor(nombres, apellidos, edad, correo, activo, cursosDictados, calificacion) {
    super(nombres, apellidos, edad, correo, activo);
    this.cursosDictados = cursosDictados;
    this.calificacion = calificacion;
  }
}