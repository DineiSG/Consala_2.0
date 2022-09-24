import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  nome=""
  funcao=""
  setor=""
  remuneracao=""
  matricula=""
  cpf=""

  //validaçao dos dados informados no formulario//
  ok:boolean=false

  

  constructor() { }

  ngOnInit(): void {
  }

}
