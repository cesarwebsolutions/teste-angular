import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiGithubService } from 'src/app/services/api-github.service';
import * as moment from 'moment';

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
  exibirMensagemDeErro = false
  exibirPaginacao = false
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

  listaRepositorios() {
    this.resetarVariaveisAoListar()
    const params = this.parametros(this.page);
    console.log(this.form.get('repositorio')?.value)
    this.serviceGit.listaRepositorios(this.form.get('repositorio')?.value, params).subscribe((resp: any) => {
      this.loader = false
      const { items, total_count } = resp

      if (total_count > 0) {
        this.exibirPaginacao = true
      }
      this.totalRepositorios = total_count
      this.repositorios = items
      console.log(resp)
    }, err => {
      this.exibirPaginacao = false
      this.loader = false
      this.exibirMensagemDeErro = true
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

  listaIssues(nomeERepositorio: string) {

  }

  formataNumero(numero: number): string {
    const k = 1000;
    const mil = 1000000;
    const bilhao = 1000000000;

    if (numero >= bilhao) {
      return (numero / bilhao).toFixed(1) + 'bi';
    } else if (numero >= mil) {
      return (numero / mil).toFixed(1) + 'mi';
    } else if (numero >= k) {
      return (numero / k).toFixed(1) + 'k';
    } else {
      return numero.toString();
    }
  }

  calcularDiferenca(dataPassada: any) {
    moment.locale('pt-br')
    const dataFormatada = moment(dataPassada).format('YYYYMMDD')
    return moment(dataFormatada, "YYYYMMDD").fromNow()
  }

  resetarVariaveisAoListar() {
    this.exibirPaginacao = false
    this.loader = true
    this.repositorios = []
    this.totalRepositorios = 0
  }
}
