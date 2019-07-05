import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantListCurrentComponent } from './restaurant-list-current/restaurant-list-current.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},

	{
		path: 'location/:city',
		component: RestaurantListComponent
	},
	{
		path: 'geolocation/:geocode',
		component: RestaurantListCurrentComponent
	},
	{
		path: 'restaurant-details/:name',
		component: RestaurantDetailsComponent
	},
	{
		path: 'search/:query',
		component: SearchComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
	RestaurantListCurrentComponent,
	RestaurantListComponent,
	RestaurantDetailsComponent,
	SearchComponent,
	HomeComponent
]
