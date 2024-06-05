import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: "login", pathMatch:"full"},
  { path:'home', component: HomeComponent },
  { path:'admin', component: AdminComponent},
  { path:'user', component: UserComponent},
  { path:'login', component: LoginComponent },
  { path:'forbidden', component: ForbiddenComponent },
  { path:'AddNewUser', component: AddNewUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
