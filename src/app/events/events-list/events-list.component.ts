import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  event1 = {
    icon: "/assets/images/angular_logo.png",
    id: 1,
    name: 'Angular Connect',
    date: '01/02/2019',
    time: '10:00 am',
    price: 599.90,
    imageUrl: '/assets/images/angular_logo.png',
    location: {
      address: '1067 DT',
      city: 'London',
      country: 'England'
    }
  };
  event2 = {
    icon: "/assets/images/react_logo.svg",
    id: 1,
    name: 'React Connect',
    date: '11/02/2019',
    time: '10:00 am',
    price: 599.90,
    imageUrl: '/assets/images/react_logo.svg',
    location: {
      address: '1067 DT',
      city: 'London',
      country: 'England'
    }
  };
  event3 = {
    icon: "/assets/images/vue_logo.png",
    id: 1,
    name: 'Vue Connect',
    date: '15/02/2019',
    time: '10:00 am',
    price: 599.90,
    imageUrl: '/assets/images/vue_logo.png',
    location: {
      address: '1067 DT',
      city: 'London',
      country: 'England'
    }
  };

  constructor() { }

  handleClick(data) {
    console.log(data);
  }

  ngOnInit() {
  }

}
