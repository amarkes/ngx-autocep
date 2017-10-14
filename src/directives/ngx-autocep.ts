import { Directive, HostListener, EventEmitter, Output } from '@angular/core';
import { CepService } from '../services/cep/cep.service';
import { CepModel } from '../services/cep/cep.model';

@Directive({
  selector: '[ngxAutoCep]'
})
export class CepDirective {

  @Output() cepEvent: EventEmitter<CepModel> = new EventEmitter();

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    if (value.length >= 8) {
      this.getCep(value);
    }
  }
  constructor(private cepServices: CepService) { }
  getCep(value: string): void {
    this.cepServices.get(value).subscribe(res => {
      this.cepEvent.emit(res);
    });
  }
}
