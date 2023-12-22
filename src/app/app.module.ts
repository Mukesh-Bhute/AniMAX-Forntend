import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { HomeComponent } from './home/home.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { AnimeProfileComponent } from './anime-profile/anime-profile.component';

import { Error404Component } from './error404/error404.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AnimeListComponent,
    HomeComponent,
    AnimeCardComponent,
    AnimeProfileComponent,
    Error404Component,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    
    
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
