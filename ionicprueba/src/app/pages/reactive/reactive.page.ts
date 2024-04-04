import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.page.html',
  styleUrls: ['./reactive.page.scss'],
})
export class ReactivePage {
  personaForm = this.formBuilder.group({
    nombres: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }


}
