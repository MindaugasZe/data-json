import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DisplayAllComponent } from './display-all/display-all.component';

const routes: Routes = [
  { path: 'display-all', component: DisplayAllComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', redirectTo:  'display-all' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
