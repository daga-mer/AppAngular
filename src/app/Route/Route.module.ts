import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from '../inicio/inicio.component';
import { JikanComponent } from '../jikan/jikan.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'Inicio', component: InicioComponent},
    {path:'Jikan', component: JikanComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
    declarations: []
})

export class RouteModule {}