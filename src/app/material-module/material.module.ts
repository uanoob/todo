import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatMenuModule  
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatMenuModule  
  ],
})

 export class MaterialModule {}