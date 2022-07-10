import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPage } from './pages/detail/detail.page';
import { UsersPage } from './pages/users/users.page';

const routes: Routes = [
  {
    path: 'users',
    component: UsersPage
  },
  {
    path: 'users/:id',
    component: DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
