import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.page.html',
  styleUrls: ['./reactive.page.scss'],
})
export class ReactivePage {
  personaForm = this.formBuilder.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    edad: ['', [
      Validators.required,
      Validators.min(1),
      Validators.max(99)
    ]
    ],
    ciudad: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) { }

  saveForm() {
    console.log(this.personaForm.value);
  }
}
