import { Component, OnInit } from '@angular/core';
import {SCHEDULE_INFO} from '../schedule-info';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {
  scheduleInfo = SCHEDULE_INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
