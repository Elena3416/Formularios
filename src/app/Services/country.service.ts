import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from "rxjs/operators";
import { Country } from "./../Interfaces/CountryInterface"
import { from } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  //Se crea una propiedad privada con la url de la api
  private url: string = "https://restcountries.eu/rest/v2/all";

  //Se inyecta el httpclient en el contructor
  constructor(private http: HttpClient) { }

  //Se crea un metodo para hacer la peticion de la url
  public GethttpCountries() {
    return this.http
      .get(this.url)
      .pipe(
        mergeMap((countries: Country[]) =>
          from(countries).pipe(
            map((country) => country.name)
          )
        )
      );
  }
}

/**
 * Este codigo hace la misma funcion que la operacion anterior
 * map((country:Country) => {
 *  let NombrePais = country.name;
 *  return {NombrePais: NombrePais}
 * });
 */