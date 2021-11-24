import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialImporterModule } from 'src/app/app-material-importer.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MMAFormFieldComponent } from './mma-form-field/mma-form-field.component';
import { MMADialogComponent } from './mma-dialog/mma-dialog.component';
import { MMAFileUploaderComponent } from './mma-file-uploader/mma-file-uploader.component';
import { DragAndDropDirective } from './drag-and-drop-directive/drag-and-drop.directive';
import { MMATableComponent } from './mma-table/mma-table.component';

const UTILITY_COMPONENTS = [
  MMAFormFieldComponent,
  MMADialogComponent,
  MMAFileUploaderComponent,
  DragAndDropDirective,
  MMATableComponent
];


@NgModule({
  imports: [
    CommonModule,
    AppMaterialImporterModule,
    ReactiveFormsModule
  ],
  declarations: UTILITY_COMPONENTS,
  exports: UTILITY_COMPONENTS
})
export class SharedUtilitiesModule { }
