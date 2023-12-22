import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeProfileComponent } from './anime-profile/anime-profile.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './authguard.guard';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

  {
    path:"",
    redirectTo:'logout',
    pathMatch:'full'
  },
  {
    path: 'home', component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'anime/:id', component: AnimeProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'about', component: AboutComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'login',component: LoginComponent
  },
  {
    path:'register',component: RegisterComponent
  },
  {
    path:'logout',component: LogoutComponent
  },
  {
    path:'**' , pathMatch:'full', component: Error404Component
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
