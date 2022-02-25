import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css'],
})
export class CardHeaderComponent {
  @Output() expand = new EventEmitter();
  @Input() isExpanded = false;
}
