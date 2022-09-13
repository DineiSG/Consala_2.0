import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MenuComponent } from "./menu/menu.component";
import { TelaLoginComponent } from "./tela-login/tela-login.component";


const routes: Routes=[
    {path:'' , component:TelaLoginComponent},
    {path:'menu', component:MenuComponent }
]

@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}



 
