import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageErrorsService {

  constructor() { }

  public ErrorMessage(errorRecibido: Object) {

    let message: string = "";

    if (errorRecibido == null) {
      return {
        error: false
      }
    }

    switch (true) {
      case errorRecibido.hasOwnProperty("required"):
        message = 'Este campo no debe estar vacío';
        break;

      case errorRecibido.hasOwnProperty("onlyAlpha"):
        message = "El campo cuenta con caracteres innecesarios";
        break;

      case errorRecibido.hasOwnProperty("minLength"):
        message = "La longitud mínima en este campo no es suficiente";
        break;

      case errorRecibido.hasOwnProperty("maxLength"):
        message = "La longitud maxima en este campo es excedida";
        break;

      case errorRecibido.hasOwnProperty('digit'):
        message = "Este campo solo se ingresa numeros";
        break;

      case errorRecibido.hasOwnProperty("email"):
        message = "Este campo debe contener un @ para el correo eléctronico";
        break;

      case errorRecibido.hasOwnProperty("compare"):
        message = "Este este correo eléctronico no es igual"
    }

    return {
      message,
      error: true,
    };
  }
}
