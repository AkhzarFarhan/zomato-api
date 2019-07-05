import { Injectable , OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ApiService implements OnInit {

	public headers = new HttpHeaders().set('user-key', '3ee31dbcbd7dd923b925f7624c45e59f'); 

	public url : string = 'https://developers.zomato.com/api/v2.1/';


	constructor(private http: HttpClient) { }

	ngOnInit() { }

	getAll(url) {
		//console.log( 'this url '  + this.url);
		this.url = url;
		return this.http
		  .get<any[]>(this.url , {headers : this.headers } )
		  .pipe(map(data => data));
	}

}
