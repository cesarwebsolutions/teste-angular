import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

  baseUrl =  environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }

  listaRepositorios(repositorio: string, params:any){
    console.log(params)
    let url = `${this.baseUrl}repositories?q=${repositorio}`

    return this.http.get(url, { params })
  }
}
