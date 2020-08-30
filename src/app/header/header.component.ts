import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
  }

  goToLink(url: string) {
    this.headerService.goToLink(url);
  }

  scroll(id: string){
    this.headerService.scroll(id);
  }

}
