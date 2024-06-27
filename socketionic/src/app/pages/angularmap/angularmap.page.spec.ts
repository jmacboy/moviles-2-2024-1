import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularmapPage } from './angularmap.page';

describe('AngularmapPage', () => {
  let component: AngularmapPage;
  let fixture: ComponentFixture<AngularmapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
