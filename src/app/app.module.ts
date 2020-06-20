import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
//importar el modulo de forms para comenzar hacer las validaciones
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
//llamar al httpClientModule
import { HttpClientModule } from "@angular/common/http";
//llamar al rxforms
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { UppercaselettersDirective } from './Directivas/uppercaseletters.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    UppercaselettersDirective,
  ],
  imports: [
    BrowserModule,
    //Agregamos el modulo de reactiveforms
    ReactiveFormsModule,
    //Agregamos el modulo de httpClient
    HttpClientModule,
    //Agregamos el modulo de forms
    FormsModule,
      //Agregamos el modulo de rx reactive forms
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
