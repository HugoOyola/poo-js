export default class Usuario {
  constructor(nombres, apellidos, edad, correo, activo) {
  this.nombres = nombres;
  this.apellidos = apellidos;
  this.edad = edad;
  this.correo = correo;
  this.activo = activo;
}
  presentarse() {
    return `Hola soy ${this.nombres} y mi correo es ${this.correo}`;
  }

  // Metodos getters y setters
  // GET -> Obtener
  // SET -> Establecer o Dar
  getNombres() {
    return this.nombres;
  }

  getAppelidos() {
    return this.apellidos;
  }

  getEdad() {
    return this.edad;
  }
  getCorreo() {
    return this.correo;
  }
  getActivo() {
    return this.activo;
  }

  setNombres(nombres) {
    this.nombres = nombres;
  }

  setApellidos(apellidos) {
    this.apellidos = apellidos;
  }

  setEdad(edad) {
    this.edad = edad;
  }

  setCorreo(correo) {
    this.correo = correo;
  }

  setActivo(activo) {
    this.activo = activo;
  }

}