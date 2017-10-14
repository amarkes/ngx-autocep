import { Injectable } from '@angular/core';
import { CepModel } from './cep.model';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CepService {
  cep: CepModel;
  constructor(private http: Http) { }
  get(cep: string): Observable<CepModel> {
    const promise = this.http.get(`/ws/${cep}/json/`)
      .toPromise()
      .then(res => res.json());
    return Observable.fromPromise(promise);
  }

}
