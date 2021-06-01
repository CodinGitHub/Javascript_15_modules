class Terrestre extends Transporte{
  constructor(marca, anyo, modelo){
    super(marca, anyo);
    this._modelo = modelo;
  }
}