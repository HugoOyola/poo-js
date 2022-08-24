export default class Curso{
  constructor(nombre,poster,sesiones){
    this.nombre = nombre
    this.poster = poster
    this.sesiones = sesiones
    this.inscritos = []
  }

  getNombre(){
    return this.nombre
  }

  getPoster(){
    return this.poster
  }

  getSesiones(){
    return this.sesiones
  }

  getInscritos(){
    return this.inscritos
  }

  setNombre(nombre){
    this.nombre = nombre
  }

  setPoster(poster){
    this.poster = poster
  }

  setSesiones(sesiones){
    this.sesiones = sesiones
  }

  setInscritos(inscritos){
    this.inscritos = inscritos
  }
}