import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepDirective } from './directives/ngx-autocep';
import { CepService } from './services/cep/cep.service';
import { CepModule } from './services/cep/cep.module';

@NgModule({
  declarations: [
    CepDirective
  ],
  exports: [
    CepDirective,
    CepModule
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CepService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NgxAutoCepModule {}
