import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  isRebeccaPurple = false;
  @Input() event;
  @Output() eventClick = new EventEmitter();
  constructor() { }

  handleClick() {
    this.eventClick.emit(this.event.name);
  }

  setRebeccaPurple() {
    this.isRebeccaPurple = !this.isRebeccaPurple;
  }

  ngOnInit() {
  }

}
