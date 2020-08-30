import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open("//" + url, '_blank');
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }
}
