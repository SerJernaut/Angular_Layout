import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  goToLink(url: string){
    window.open("//" + url, '_blank');
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }
}
