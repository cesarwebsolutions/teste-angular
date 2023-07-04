import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiGithubService } from 'src/app/services/api-github.service';

@Component({
  selector: 'app-lista-repositorios',
  templateUrl: './lista-repositorios.component.html',
  styleUrls: ['./lista-repositorios.component.css']
})
export class ListaRepositoriosComponent implements OnInit {

  repositorios = [] as any
  form: FormGroup
  loader = false;
  totalRepositorios = 0
  page = 1
  constructor(
    private serviceGit: ApiGithubService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      repositorio: new FormControl('node', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.listaRepositorios()
  }

  listaRepositorios(){
    this.loader = true
    this.repositorios = []
    this.totalRepositorios = 0
    const params = this.parametros(this.page);
    console.log(this.form.get('repositorio')?.value)
    this.serviceGit.listaRepositorios(this.form.get('repositorio')?.value, params).subscribe((resp: any) => {
      this.loader = false
      const { items, total_count } = resp
      this.totalRepositorios = total_count
      this.repositorios = items
      console.log(resp)
    }, err => {
      console.log(err)
    })
  }

  parametros(page: number): any {
    let params: any = {};

    if (page) {
      params[`page`] = page;
    }

    return params;
  }

  mudarPagina(event: number): void {
    console.log(event)
    this.page = event;
    this.listaRepositorios();
  }

  listaIssues(nomeERepositorio: string){
    
  }
}
