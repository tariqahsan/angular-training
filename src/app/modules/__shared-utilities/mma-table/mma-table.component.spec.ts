import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMATableComponent } from './mma-table.component';

describe('MMATableComponent', () => {
  let component: MMATableComponent;
  let fixture: ComponentFixture<MMATableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMATableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MMATableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
