export default class Curso{
  constructor(nombre,poster,sesiones,docente){
    this.nombre = nombre
    this.poster = poster
    this.sesiones = sesiones
    this.docente = docente
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

  getDocente(){
    return this.docente
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

  setDocente(docente){
    this.docente = docente
  }

  setInscritos(inscritos){
    this.inscritos = inscritos
  }
}