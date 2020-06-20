import { Component, OnInit } from '@angular/core';
import { CountryService } from "./../../Services/country.service"
import { FormGroup, FormControl } from '@angular/forms';
import { RxwebValidators} from '@rxweb/reactive-form-validators';
import { MessageErrorsService } from "./../../Services/message-errors.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})

export class FormularioComponent implements OnInit {

  //Se crea un arreglo de tipo string vacio
  public CountriesName:Array<string> = [];

  //se crea un propiedad de tipo formgroup
  public formulario:FormGroup;

  constructor(private AWService:CountryService, private AWMsgErrSrv:MessageErrorsService) { 
    //Llamamos al servicio y llenamos el arreglo
    this.AWService.GethttpCountries().subscribe((country) => this.CountriesName.push(country));
  }

  ngOnInit(): void {
    this.CreateForm();
  }

  //FormControl (<valorinicial>)
  public CreateForm(){
      this.formulario = new FormGroup({

      firstName: new FormControl(null, [, 
      RxwebValidators.required(),
      RxwebValidators.pattern({expression:{onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/ },}),
      RxwebValidators.minLength({value:5}),
      RxwebValidators.maxLength({value:30})]),
 
      lastName: new FormControl(null, [ 
      RxwebValidators.required(),
      RxwebValidators.pattern({expression:{onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/ },}),
      RxwebValidators.minLength({value:5}),
      RxwebValidators.maxLength({value:30})]),

      company: new FormControl(null, [
      RxwebValidators.required(),
      RxwebValidators.pattern({expression:{onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/ },}),
      RxwebValidators.minLength({value:5}),
      RxwebValidators.maxLength({value:30})]),

      phone: new FormControl(null, [
      RxwebValidators.required(),
      RxwebValidators.digit(),
      RxwebValidators.minLength({value:7}),
      RxwebValidators.maxLength({value:10})]),
        
      extension: new FormControl(null, [
      RxwebValidators.required(),
      RxwebValidators.digit(),
      RxwebValidators.minLength({value:3}),
      RxwebValidators.maxLength({value:6})]),

      interior: new FormControl(null, [
      RxwebValidators.required(),
      RxwebValidators.digit(),
      RxwebValidators.minLength({value:3}),
      RxwebValidators.maxLength({value:6})]),

      repeatemail: new FormControl(null, [
      RxwebValidators.email(),
      RxwebValidators.required(),
      RxwebValidators.compare({fieldName:"email"}),
      RxwebValidators.minLength({value:3}),
      RxwebValidators.maxLength({value:30})]),
      
      address: new FormControl(null, [
      RxwebValidators.required(),
      RxwebValidators.minLength({value:5}),
      RxwebValidators.maxLength({value:40})]),

      city: new FormControl(null, [, 
      RxwebValidators.required(),
      RxwebValidators.pattern({expression:{onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/ },}),
      RxwebValidators.minLength({value:5}),
      RxwebValidators.maxLength({value:30})]),

      zipcode: new FormControl(null, [
      RxwebValidators.required(),
      RxwebValidators.digit(),
      RxwebValidators.maxLength({value:5})]),

      email: new FormControl(null, [ 
      RxwebValidators.email(),
      RxwebValidators.required(),
      RxwebValidators.minLength({value:3}),
      RxwebValidators.maxLength({value:30})]),

      country: new FormControl(null, RxwebValidators.required()),

      addressType: new FormControl(null, RxwebValidators.required()),

  })};
     
  public MostrarFormulario(){
       console.clear();
  }

  public Validarform(control:string){

    //Si el usuario no ha tocado el input, no entraria a las validaciones
    if(!this.formulario.controls[control].touched) return { error:undefined };

    return this.AWMsgErrSrv.ErrorMessage(this.formulario.controls[control].errors);
    //regresa los errores del objeto que yo tengo
  }
}

/* Validators.required - indica que el campo no este vacio, 
Validators.minLength(3), es el valor minimo que tiene el campo
Validators.pattern - 
para poner mas de una validacion ponemos corchetes en todos los validators
rxweb validators es una libreria que nos ayuda a hacer validaciones especificas,
ya que validators en angular solo tiene 12 validaciones.
pristine - cuando el usuario no ha modificado el valor por default el input, esta en false 
y cuando hace cambio, el se convierte en true
status - valid cuando los errores son validos y status invalid cuando hay un error en el inout
touched = true, cuando entraste al input y sales se el, marca true, false cuando no se ha entrado
al input

*/