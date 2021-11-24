import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MMAFileUploaderComponent } from './mma-file-uploader.component';

describe('MMAFileUploaderComponent', () => {
  let component: MMAFileUploaderComponent;
  let fixture: ComponentFixture<MMAFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMAFileUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MMAFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
