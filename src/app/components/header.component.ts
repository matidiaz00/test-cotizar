import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  scrollTop: boolean = true;

  @HostListener("window:scroll", ['$event'])
  scrollHandler($event:Event) {
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    this.scrollTop = (scrollOffset === 0) ? true : false;
  }

  scrollToTop() {
    window.scroll(0,0);
  }

}
