import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: Object;
  loading = false;
  errorMsg = "";

  constructor(private data: DataService) { }

  ngOnInit() {
     this.loading = true;
     this.errorMsg = "";

     this.data.getEvents().subscribe(
        response => {
        	 this.events = response.body;
		 this.loading = false;
        	 console.log(this.events);
     }, 
        err => {
	    this.loading = false;
	    if (err.error instanceof Error) {
                 console.log('Frontend or network error:', err.error);
              } else {
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error.message);
                if (err.status == 0) {
                   this.errorMsg = "*server is down"
                } else {
                   this.errorMsg = "*" + err.error.message;
		}
              }
     	
     } );
  }

}
