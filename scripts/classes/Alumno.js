import Usuario from "./Usuario.js";

export default class Alumno extends Usuario {
  constructor(nombres, apellidos, edad, correo, activo, cursosAprobados) {
    super(nombres, apellidos, edad, correo, activo);
    this.cursosAprobados = cursosAprobados;
  }
}