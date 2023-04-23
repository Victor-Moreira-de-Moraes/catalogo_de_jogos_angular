import { NgModule } from "@angular/core";
import { RouterModule, Routes, ROUTES } from "@angular/router";
import { CadastroJogosComponent } from "./components/cadastro-jogos/cadastro-jogos.component";
import { CadastroGenerosComponent } from "./components/cadastro-generos/cadastro-generos.component";


const routes: Routes = [
    {path: '', component: CadastroJogosComponent},
    {path: '/list', component: CadastroGenerosComponent}
]

@NgModule ({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
