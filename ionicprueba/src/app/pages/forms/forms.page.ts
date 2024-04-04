import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage {
  persona: any = {
    nombres: "",
    apellidos: "",
    ciudad: "",
    edad: "",
    fechaNacimiento: "",
  }
  constructor() { }
  enviarDatos(){
    console.log(this.persona);
  }

}
