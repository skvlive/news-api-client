import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailsPageComponent } from './details-page/details-page.component'

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
  },
  { 
    path: 'movie/:id', 
    component: DetailsPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
