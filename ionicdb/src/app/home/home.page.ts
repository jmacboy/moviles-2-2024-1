import { Component } from '@angular/core';
import { SqliteService } from '../services/sqlite.service';
import { PersonaBLL } from '../dal/PersonaBLL';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sqlite: SqliteService) {
    this.getAllPersonas();
  }
  async getAllPersonas() {
    const personas = await new PersonaBLL().selectAll(this.sqlite);
    console.log(personas);
  }

}
