import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { EventBindComponent }  from './event-bind/event-bind.component';
import { TwoWayDataBindingComponent }  from './two-way-data-binding/two-way-data-binding.component';
import { InputOutputPropertyComponent }  from './input-output-property/input-output-property.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'search',     component: HeroSearchComponent },
  { path: 'event-bind',     component: EventBindComponent },
  { path: 'two-way-data-binding',     component: TwoWayDataBindingComponent },
  { path: 'input-output-property',     component: InputOutputPropertyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
