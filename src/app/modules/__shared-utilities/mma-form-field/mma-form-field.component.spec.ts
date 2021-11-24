import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMAFormFieldComponent } from './mma-form-field.component';

describe('MMAFormFieldComponent', () => {
  let component: MMAFormFieldComponent;
  let fixture: ComponentFixture<MMAFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMAFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MMAFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
