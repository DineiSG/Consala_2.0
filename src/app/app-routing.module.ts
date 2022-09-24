import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MenuComponent } from "./menu/menu.component";
import { TelaLoginComponent } from "./tela-login/tela-login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

const routes: Routes=[
    {path:'' , component:TelaLoginComponent},
    {path:'menu', component:MenuComponent },
    {path:'cadastro',component:CadastroComponent}
]

@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}



 
