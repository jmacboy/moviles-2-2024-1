import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaformPage } from './personaform.page';

describe('PersonaformPage', () => {
  let component: PersonaformPage;
  let fixture: ComponentFixture<PersonaformPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
