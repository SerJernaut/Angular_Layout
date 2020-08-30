import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.sass']
})
export class PresentationComponent implements OnInit {

  isShowVideo = false;

  constructor() { }

  ngOnInit(): void {
  }

  showVideo () {
    this.isShowVideo = !this.isShowVideo
  }
}
