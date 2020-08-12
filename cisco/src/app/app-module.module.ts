import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  exports : [MatTableModule, MatPaginatorModule, MatDatepickerModule, MatFormFieldModule,MatNativeDateModule,MatButtonToggleModule,
    MatInputModule,MatSelectModule,ReactiveFormsModule, MatGridListModule]
})
export class AppModuleModule { }
