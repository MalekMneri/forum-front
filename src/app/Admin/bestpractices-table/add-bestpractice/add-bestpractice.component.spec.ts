import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBestpracticeComponent } from './add-bestpractice.component';

describe('AddBestpracticeComponent', () => {
  let component: AddBestpracticeComponent;
  let fixture: ComponentFixture<AddBestpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBestpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBestpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
