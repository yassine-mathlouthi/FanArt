import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormComponent } from './form/form.component';
import { MatSelectModule } from '@angular/material/select';
import { TestComponent } from '../test/test.component';

@NgModule({
  declarations: [
    
    TestComponent,
    
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormComponent,
    MatSelectModule,
    
    
  ],
 

  
})
export class FormssModule {
  
 }
