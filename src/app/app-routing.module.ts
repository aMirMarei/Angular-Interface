import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'user', component: TableComponent },
  { path: 'edit', component: TableComponent },
  { path: 'create', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
