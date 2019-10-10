import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { Home1Component } from './home1/home1.component';


const appRoutes: Routes = [ 
  { path: 'login', component: LoginComponent }, 
  { path: 'home', component: HomeComponent },
  {path:'create',component:CreateComponent},
  {path:'view',component:ViewComponent},
  {path:'home1',component:Home1Component},
  
  // { path: '**', component: PageNotFoundComponent } 
]; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateComponent,
    ViewComponent,
    Home1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
