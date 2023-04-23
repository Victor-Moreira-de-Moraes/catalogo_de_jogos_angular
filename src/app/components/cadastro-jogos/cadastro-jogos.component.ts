import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'; 

@Component({
  selector: 'app-cadastro-jogos',
  templateUrl: './cadastro-jogos.component.html',
  styleUrls: ['./cadastro-jogos.component.css']
})
export class CadastroJogosComponent implements OnInit {
[x: string]: any;

  jogos = [];
  jogo = {
    titulo: '',
    descricao: '',
    data_lancamento: '',
    generos: '',
    desenvolvedora: ''
  };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.listarJogos();
  }
  listarJogos() {
    throw new Error('Method not implemented.');
  }

  cadastrarJogo() {
    this.api.cadastrarJogo(this.jogo).subscribe(() => {
      this.jogo = {
        titulo: '',
        descricao: '',
        data_lancamento: '',
        generos: '',
        desenvolvedora: ''
      };
      this.listarJogos();
    });
  }
}
