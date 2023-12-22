import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {


  constructor() { }

  ngOnInit(): void {
    this.setupMenuToggle();
  }

  private setupMenuToggle(): void {
    const menu = document.querySelector('#menu-bars');
    const navbar = document.querySelector('.navbar');

    if (menu && navbar) {
      menu.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
      });
    }
  }

}
