import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from '../../src/app/components/login/login.component';
import { SessionComponent } from './components/session/session.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'session/:username', component: SessionComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
     ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
