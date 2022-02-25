import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  expanded = false;
  wrapper: Wrapper | null = null;

  expand(card: HTMLElement, wrapper: HTMLElement) {
    this.wrapper = {
      width: wrapper.offsetWidth + 'px',
      height: wrapper.offsetHeight + 'px',
      top: wrapper.offsetTop + 'px',
      left: wrapper.offsetLeft + 'px',
      bottom:
        wrapper.getBoundingClientRect().bottom - wrapper.offsetHeight + 'px',
    };

    wrapper.style.width = this.wrapper.width;
    wrapper.style.height = this.wrapper.height;

    if (!this.expanded) {
      card.style.top = this.wrapper.top;
      card.style.left = this.wrapper.left;
      card.style.bottom = this.wrapper.bottom;
      card.style.position = 'absolute';
      this.expanded = true;

      setTimeout(() => {
        card.style.top = '32px';
        card.style.left = '32px';
        card.style.bottom = '32px';
      });

      setTimeout(() => {
        card.style.top = '32px';
        card.style.left = '32px';
        card.style.bottom = '32px';
      });
    } else {
      card.style.top = this.wrapper.top;
      card.style.left = this.wrapper.left;
      card.style.bottom = this.wrapper.bottom;
      this.expanded = false;

      setTimeout(() => (card.style.position = 'static'), 700);
    }
  }
}

interface Wrapper {
  width: string;
  height: string;
  top: string;
  left: string;
  bottom: string;
}
