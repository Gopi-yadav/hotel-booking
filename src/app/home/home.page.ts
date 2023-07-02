import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  location: string | undefined;
  checkInDate: string | undefined;
  checkOutDate: string | undefined;
  guests: number | undefined;
  hotels: any[] = [];

  searchHotels() {
    
    this.hotels = [
      {
        name: 'Novotel',
        location: 'Hyderabad',
        image: 'assets/nova.jpg',
        price: 10000,
        rating: 4.5,
      },
      {
        name: 'Hotel Grand mercure',
        location: 'Bangalore',
        image: 'assets/mercure.jpg',
        price: 5000,
        rating: 4.0,
      },
      {
        name: 'ibis Chennai OMR',
        location: 'Chennai',
        image: 'assets/ibis.jpg',
        price: 3000,
        rating: 4.2,
      },
    ];
  }
}
