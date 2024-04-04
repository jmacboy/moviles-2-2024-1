import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListapostsPage } from './listaposts.page';

describe('ListapostsPage', () => {
  let component: ListapostsPage;
  let fixture: ComponentFixture<ListapostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListapostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
