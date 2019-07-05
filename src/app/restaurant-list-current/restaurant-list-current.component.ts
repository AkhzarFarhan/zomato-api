import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-restaurant-list-current',
  templateUrl: './restaurant-list-current.component.html',
  styleUrls: ['./restaurant-list-current.component.css']
})
export class RestaurantListCurrentComponent implements OnInit {

  public restItems;
  public geolocationPosition: any;
  public lat: number;
  public lon: number;
  public data: string;
  public url: string;
  public searcharea: string = "";	

  constructor(private route: ActivatedRoute, private apiservice: ApiService, private router: Router) { }

  ngOnInit() {
  	let temp = this.route.snapshot.paramMap.get('geocode');
  	this.data = temp;
  	console.log('this is current loc data: ', this.data);

  	if(this.data === 'geocode' || this.data.slice(0,3) === 'lat') {
  		this.currentloc();
  	}
  }

  getRestItems = (url) => {
    console.log("getRestItems URL " + url);
    this.apiservice.getAll(url)
      .subscribe(
        restItems => {
          this.restItems = restItems;
          // console.log("Yes");
          console.log("I am inside", this.restItems);
        }
      )
  }	

  currentloc = () =>
  {
  	if (window.navigator && window.navigator.geolocation) {
	        window.navigator.geolocation.getCurrentPosition(
	            position => {
	                this.geolocationPosition = position,
	                    // console.log(position.coords.latitude)
	                    this.lat  = position.coords.latitude;
	                    this.lon =  position.coords.longitude;

	                    // console.log("Latitude: ", position.coords.latitude, "Longitude: ", position.coords.longitude);
	                    this.url = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
	                    this.getRestItems(this.url);
	            }
	        );
	    };
  }

  resDetails = (res_key) =>
  {
    this.router.navigate(['/restaurant-details', res_key]);
  } 

  searchnow()
  {
    this.router.navigate(['/search', this.searcharea]);
  }  

  returnhomepage() {
    this.router.navigate(['']);
  }
    

}
