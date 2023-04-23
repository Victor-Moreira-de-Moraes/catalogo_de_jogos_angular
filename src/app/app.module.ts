import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroJogosComponent } from './components/cadastro-jogos/cadastro-jogos.component';
import { CadastroGenerosComponent } from './components/cadastro-generos/cadastro-generos.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroJogosComponent,
    CadastroGenerosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
