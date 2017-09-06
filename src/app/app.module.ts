import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotoComponent } from './projects/photo/photo.component';
import { TechComponent } from './aboutme/tech/tech.component';

import { AppRoutingModule } from './app-routing.module';

import { StateService, SkillsService, FunService, FactService } from './services';
import { RandomfactComponent } from './aboutme/randomfact/randomfact.component';
import { FunWithTextComponent } from './fun-with-text/fun-with-text.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutmeComponent,
    ProjectsComponent,
    PhotoComponent,
    TechComponent,
    RandomfactComponent,
    FunWithTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [],
  providers: [ StateService, SkillsService, FunService, FactService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
