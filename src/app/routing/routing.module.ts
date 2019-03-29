import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from '../display/display.component';
import { RepositoriesComponent } from '../repositories/repositories.component';

const routes: Routes = [
  {path: "user", component: DisplayComponent},
  {path: "repository", component: RepositoriesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
