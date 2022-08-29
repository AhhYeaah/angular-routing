import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExpComponent } from './button-exp.component';

describe('ButtonExpComponent', () => {
  let component: ButtonExpComponent;
  let fixture: ComponentFixture<ButtonExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
