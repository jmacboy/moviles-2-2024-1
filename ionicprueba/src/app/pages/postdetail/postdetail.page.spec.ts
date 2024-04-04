import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostdetailPage } from './postdetail.page';

describe('PostdetailPage', () => {
  let component: PostdetailPage;
  let fixture: ComponentFixture<PostdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PostdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
