import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public geolocationPosition: any;
  public lat: number;
  public lon: number;

  constructor(private apiservice : ApiService, private router: Router) {}
 
  ngOnInit() {
  }

  banglore = () => {
    let data = "banglore";
    this.router.navigate(['/location', data]);

  }

  mumbai = () => {
    let data = "mumbai";
    this.router.navigate(['/location', data]);    
  }

  hyderabad = () => {
    let data = "hyderabad";
    this.router.navigate(['/location', data]);    
  }

  delhi = () => {
    let data = "delhi";
    this.router.navigate(['/location', data]);    
  }

  pune = () => {
    let data = "pune";
    this.router.navigate(['/location', data]);    
  }

  currentloc = () => {
    if (window.navigator && window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
              position => {
                  this.geolocationPosition = position,
                      this.lat  = position.coords.latitude;
                      this.lon =  position.coords.longitude;
                      let data = 'lat=' + this.lat + 'lon=' + this.lon;
                      this.router.navigate(['/geolocation', data]);
              }
          );
      };
  }
}
