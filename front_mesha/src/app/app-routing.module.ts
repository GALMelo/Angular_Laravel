import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllComponent } from './users/view-all/view-all.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
  { path: 'registros', component: ViewAllComponent },
  { path: ':NOMECOLABORADOR/validar', component: ViewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
