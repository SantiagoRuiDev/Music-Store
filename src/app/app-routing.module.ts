import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentListComponent } from './components/instrument-list/instrument-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'instruments' },
  { path: 'instruments', component: InstrumentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
