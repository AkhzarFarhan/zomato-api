import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  public data: any;
  public restDetails: any;
  public restReviewsDetails: any;
  public url: any;
  public searcharea: string = "";
  public line: string = "";
  public userid: any;
  public readMoreStatus: boolean = true;

  constructor(private apiservice: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let temp = this.route.snapshot.paramMap.get('name');
    this.data = temp;
    this.resDetails(this.data);
  }

  getRestDetails(url): void {
    console.log("getRestDetails URL " + url);
    this.apiservice.getAll(url)
      .subscribe(
        restDetails => {
          this.restDetails = restDetails;
          console.log("restDetails");
          console.log(this.restDetails);
        }
      )
  }

  getRestReviewsDetails(url): void {
    console.log("getRestReviewsDetails URL " + url);
    this.apiservice.getAll(url)
      .subscribe(
        restReviewsDetails => {
          this.restReviewsDetails = restReviewsDetails;
          console.log("restReviewsDetails");
          console.log(this.restReviewsDetails);
        }
      )
  }  

  resDetails(res_key)
  {
    this.restaurantDetails(res_key);
    this.restaurantReviews(res_key);
  }

  restaurantDetails(res_key)
  {
     this.url = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + res_key;
     this.getRestDetails(this.url);
  }

  restaurantReviews(res_key)
  {
    this.url = 'https://developers.zomato.com/api/v2.1/reviews?res_id=' + res_key;
     this.getRestReviewsDetails(this.url);
  }

  searchnow()
  {
    this.router.navigate(['/search', this.searcharea]);
  }  

  returnhomepage() {
    this.router.navigate(['']);
  }

  readMore(review,id)
  {
     this.readMoreStatus = false;
     this.line = review;
     this.userid = id;
     console.log("line is ",this.line);
  }

}