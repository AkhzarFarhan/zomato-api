import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	public data: any;
	public restResSearchDetails: any;
	public url: string;
	public searcharea: string = "";


  constructor(private apiservice: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	let temp = this.route.snapshot.paramMap.get('query');
  	this.data = temp;
  	this.searchnowold(this.data);
  }

  getResSearchDetails(url): void {
    console.log("getResSearchDetails URL " + url);
    this.apiservice.getAll(url)
      .subscribe(
        restResSearchDetails => {
          this.restResSearchDetails = restResSearchDetails;
          console.log("restResSearchDetails");
          console.log(this.restResSearchDetails);
        }
      )
  }

  searchnowold(searchareaold)
  {
    console.log(searchareaold);
    this.url = 'https://developers.zomato.com/api/v2.1/search?q=' + searchareaold;
    this.getResSearchDetails(this.url);
  }

  searchnow()
  {
  	this.searchnowold(this.searcharea);
  	this.router.navigate(['/search', this.searcharea]);	
  }

  resDetails = (res_key) =>
  {
    this.router.navigate(['/restaurant-details', res_key]);
  }  

  returnhomepage() {
    this.router.navigate(['']);
  }
  
}
