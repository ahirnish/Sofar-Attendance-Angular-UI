import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: Object;

  constructor(private data: DataService) { }

  ngOnInit() {

     this.data.getEvents().subscribe(data => {
        this.events = data
        console.log(this.events);
     } );
  }

}
