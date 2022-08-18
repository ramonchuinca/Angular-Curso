import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { produtos } from './produtos';
import { Observable } from 'rxjs';


@Injectable()
export class produtoService {

constructor(private http: HttpClient){}

    protected UrlServiceV1: string = "http://localhost:3000/";

    obterProdutos() :Observable<produtos[]> {
      return this.http
      .get<produtos[]>(this.UrlServiceV1 + "produtos");  
    }


}