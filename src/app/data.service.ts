import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getEvents() {
      return this.http.get('http://18.225.10.172:8000/api/event/all/',
      {
	observe: 'response',
	responseType: 'json'
      } )	      
  }

  createEvent(event) {
    return this.http.post('http://18.225.10.172:8000/api/event/', event, 
    {
	observe: 'response',
    	responseType: 'json'
    } )
  }

  getAttendeesFromSofarSignup() {
     return this.http.get('https://reqres.in/api/users', 
     {
	observe: 'response',
	responseType: 'json'
     } )
  }

  getAttendeesFromDate(date, month, year) {
     return this.http.get( 'http://18.225.10.172:8000/api/attendance/' + year + '/' + month + '/' + date + '/',
     {
        observe: 'response',
	responseType: 'json'
     } )
  }

  markPresentForAttendee(attendance) {
     return this.http.put('http://18.225.10.172:8000/api/attendance/present/', attendance,
     {	    
	observe: 'response',
        responseType: 'json'
     } )
  }

}
