import { Component } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationStart, NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attendance';
  loading = false;

  constructor( private router: Router ) {
     this.router.events.subscribe((event:Event) => {
        switch(true) {
	   case event instanceof NavigationStart: {
	   	this.loading = true;
		break;
	   }
	   case event instanceof NavigationEnd:
	   case event instanceof NavigationError:
	   case event instanceof NavigationCancel: {
	   	this.loading = false;
		break;
	   }
	   default: {
	   	break;
	   }
	}
     } );
  }
}
