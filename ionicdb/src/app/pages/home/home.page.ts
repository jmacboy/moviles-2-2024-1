import { Component } from '@angular/core';
import { SqliteService } from '../../services/sqlite.service';
import { PersonaBLL } from '../../dal/PersonaBLL';
import { Persona } from '../../models/persona';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  personas: Persona[] = [];
  constructor(
    private sqlite: SqliteService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(() => {
      this.getAllPersonas();
    });
  }
  async getAllPersonas() {
    this.personas =  await new PersonaBLL().selectAll(this.sqlite);
  }
  async deletePersona(id: any) {
    await new PersonaBLL().delete(this.sqlite, id);
    this.getAllPersonas();
  }
}
