import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './login/template-driven/template-driven.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent,
  },
];
