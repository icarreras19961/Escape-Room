class Usuario {
  constructor(nombre, email, edad, contrasena, partidas) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
    this.contrasena = contrasena;
    this.partidas = {
      nivel_1: false,
      nivel_2: false,
      nivel_3: false,
    };
  }
}
