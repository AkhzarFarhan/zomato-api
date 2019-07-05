import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiservice: ApiService, private router: Router) { }

  public restItems;
  public geolocationPosition: any;
  public lat: number;
  public lon: number;
  public data: string;
  public url: string;
  public searcharea: string = "";

  ngOnInit() {
  	let temp = this.route.snapshot.paramMap.get('city');
    this.data = temp;
    console.log('this is second data: ', this.data);

    if(this.data === 'banglore') {
      this.banglore();
    }
    else if(this.data === 'mumbai') {
      this.mumbai();
    }
    else if(this.data === 'hyderabad') {
      this.hyderabad();
    }
    else if(this.data === 'delhi') {
      this.delhi();
    }
    else if(this.data === 'pune') {
      this.pune();
    }
  }

  // Read all nearby restaurant
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

  banglore = () =>
  {
  	this.lat = 12.9716;
  	this.lon = 77.5946;
  	this.url = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + this.lat + '&lon=' + this.lon;
	  this.getRestItems(this.url);
  }


   mumbai = () =>
  {
    this.lat = 19.075983;
    this.lon = 72.877655;
    this.url = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + this.lat + '&lon=' + this.lon;
    this.getRestItems(this.url);

  }

   hyderabad = () =>
  {
    this.lat = 17.361720;
    this.lon = 78.475170;
    this.url = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + this.lat + '&lon=' + this.lon;
    this.getRestItems(this.url);

  }

   delhi = () =>
  {
    this.lat = 28.704060;
    this.lon = 77.102493;
    this.url = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + this.lat + '&lon=' + this.lon;
    this.getRestItems(this.url);

  }

   pune = () =>
  {
    this.lat = 18.520430;
    this.lon = 73.856743;
    this.url = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + this.lat + '&lon=' + this.lon;
    this.getRestItems(this.url);

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
