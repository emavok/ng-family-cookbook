import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RecipeSearchPageComponent } from './components/recipe-search-page/recipe-search-page.component';
import { RecipeSearchFilterComponent } from './components/recipe-search-filter/recipe-search-filter.component';
import { RecipeSearchResultsComponent } from './components/recipe-search-results/recipe-search-results.component';
import { RecipeDetailsPageComponent } from './components/recipe-details-page/recipe-details-page.component';
import { RecipeEditPageComponent } from './components/recipe-edit-page/recipe-edit-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RecipeSearchPageComponent,
    RecipeSearchFilterComponent,
    RecipeSearchResultsComponent,
    RecipeDetailsPageComponent,
    RecipeEditPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
