import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { RecipeSearchPageComponent } from './components/recipe-search-page/recipe-search-page.component';
import { RecipeDetailsPageComponent } from './components/recipe-details-page/recipe-details-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'recipes/:id',
    component: RecipeDetailsPageComponent
  }, {
    path: 'recipes',
    component: RecipeSearchPageComponent
  }, {
    path: 'main',
    component: MainPageComponent
  }, {
    path: '**',
    redirectTo: '/main',
    pathMatch: 'full'
  }, {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
