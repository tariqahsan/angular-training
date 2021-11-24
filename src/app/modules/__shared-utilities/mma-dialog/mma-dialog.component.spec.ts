import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMADialogComponent } from './mma-dialog.component';

describe('MMADialogComponent', () => {
  let component: MMADialogComponent;
  let fixture: ComponentFixture<MMADialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMADialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MMADialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
