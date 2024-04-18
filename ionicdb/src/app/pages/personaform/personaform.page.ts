import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PersonaBLL } from 'src/app/dal/PersonaBLL';
import { Persona } from 'src/app/models/persona';
import { SqliteService } from 'src/app/services/sqlite.service';

@Component({
  selector: 'app-personaform',
  templateUrl: './personaform.page.html',
  styleUrls: ['./personaform.page.scss'],
})
export class PersonaformPage {
  persona: Persona = {
    nombres: "",
    apellidos: "",
    ciudad: "",
    edad: 0,
    fechaNacimiento: "",
  }
  constructor(
    private sqlite: SqliteService,
    private navCtrl: NavController,
    private route: ActivatedRoute

  ) {
    this.route.params.subscribe((routeParams) => {
      if (routeParams["id"]) {
        this.fetchPersona(routeParams["id"]);
      }
    });
  }
  fetchPersona(id: number) {
    new PersonaBLL().selectById(this.sqlite, id).then((persona) => {
      if (persona) {
        this.persona = persona;
      }
    });
  }

  enviarDatos() {
    if (this.persona.id) {
      this.updatePersona();
    } else {
      this.insertPersona();
    }
  }
  async updatePersona() {
    await new PersonaBLL().update(this.sqlite, this.persona);
    this.navCtrl.back();
  }
  async insertPersona() {
    console.log(this.persona);
    await new PersonaBLL().insert(this.sqlite, this.persona);
    this.navCtrl.back();
  }
}
