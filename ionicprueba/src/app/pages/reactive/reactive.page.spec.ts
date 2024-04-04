import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactivePage } from './reactive.page';

describe('ReactivePage', () => {
  let component: ReactivePage;
  let fixture: ComponentFixture<ReactivePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReactivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
