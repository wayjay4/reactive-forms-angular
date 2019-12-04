import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/reactive-form', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: '**', component: PageNotFoundComponent }  // Note: 'wildcard' route should be the last in the routing list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomePageComponent,
  PageNotFoundComponent,
  ReactiveFormComponent
];
