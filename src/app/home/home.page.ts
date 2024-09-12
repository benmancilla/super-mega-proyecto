import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = '';

  constructor() { }
  ionViewWillEnter() {
    this.username = localStorage.getItem('username') || 'Usuario';
  }
}
