import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchVideoComponent } from './search-video/search-video.component';


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'video/:id', component: SearchVideoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
