import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'event', component: EventComponent },	
      { path: 'attendance', component: AttendanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
