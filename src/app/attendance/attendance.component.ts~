import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  attendees: Object;
  attendeesList: Object;
  attendanceForm: FormGroup;
  attendanceMarkForm: FormGroup;
  errorMsg: string = "";
  markPresentMsg: string = "";

  constructor(private formBuilder: FormBuilder, private data: DataService) { }

  ngOnInit() {

     this.attendanceForm = this.formBuilder.group( {
     		    	 date: ['', Validators.required],
     } )

  }

  onGetAttendeesSubmit() {
     this.data.getAttendeesFromSofarSignup().subscribe(
     response => {
     	      this.attendees = response.body;
              console.log(this.attendees);
     },
     err => {
     	 if (err.error instanceof Error) {
                 console.log('Frontend or network error:', err.error);
         } else {
	      	console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
	 }
     } );
  }

  onAttendanceFormSubmit() {

//     console.log(this.attendanceForm.get('date').value.getDate());
//     console.log(moment(this.attendanceForm.get('date').value).format('LL'));
//     console.log(moment(this.attendanceForm.get('date').value).month()+1);

     this.attendeesList = null;
     this.errorMsg = "";
     this.markPresentMsg = "";     

     if(this.attendanceForm.invalid){
	  console.log("attendance form invalid - date")	  
	  return;
     }
     	
     this.data.getAttendeesFromDate(moment(this.attendanceForm.get('date').value).date(),
				    moment(this.attendanceForm.get('date').value).month() + 1,
				    moment(this.attendanceForm.get('date').value).year()).subscribe(
     response => {
              this.attendeesList = response.body;
              console.log(this.attendeesList);

	      this.attendanceMarkForm = this.formBuilder.group( {
                         email: ['', Validators.required],
     	      } )		 
	      
     },
     err => {
         if (err.error instanceof Error) {
                 console.log('Frontend or network error:', err.error);
         } else {
                console.log('Backend returned status code: ', err.status);
		console.log('Response body:', err.error.message);
		if (err.status == 0) {
		   this.errorMsg = "*server is down"
		} else {
		  this.errorMsg = "*" + err.error.message
		}
         }
     } );

  } 

  onAttendanceMarkFormSubmit() {
     this.errorMsg = "";
     this.markPresentMsg = "";
     if(this.attendanceMarkForm.invalid){
          console.log("attendance mark form invalid - email")
          return;
     }  

     console.log(moment(this.attendanceForm.get('date').value).format('LL'));
     console.log(this.attendanceMarkForm.get('email').value)

     var attendance = {
     	 day:moment(this.attendanceForm.get('date').value).date(),
	 month:moment(this.attendanceForm.get('date').value).month()+1,
	 year:moment(this.attendanceForm.get('date').value).year(),
	 email:this.attendanceMarkForm.get('email').value,
	 attended:true
     };

     this.data.markPresentForAttendee(attendance).subscribe(
	response => {
	   console.log(response.body);
	   this.markPresentMsg = this.attendanceMarkForm.get('email').value + " marked attended for event on " + moment(this.attendanceForm.get('date').value).format('LL');
	},
	err => {
	   console.log('Backend returned status code: ', err.status);
           console.log('Response body:', err.error.message);
           if (err.status == 0) {
               this.errorMsg = "*server is down"
           } else {
               this.errorMsg = "*" + err.error.message
           }
	}
     );
  }
	
}
