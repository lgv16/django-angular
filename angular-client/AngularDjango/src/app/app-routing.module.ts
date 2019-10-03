import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamasListComponent } from './camas-list/camas-list.component';
import { CreateCamaComponent } from './create-cama/create-cama.component';
import { SearchCamasComponent } from './search-camas/search-camas.component';

const routes: Routes = [
  { path: '', redirectTo: 'cama', pathMatch: 'full' },
  { path: 'cama', component: CamasListComponent },
  { path: 'add', component: CreateCamaComponent },
  { path: 'findbyage', component: SearchCamasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
