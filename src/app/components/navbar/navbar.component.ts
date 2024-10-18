import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { pricetagOutline, heartOutline, notificationsOutline, addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})


export class NavbarComponent  implements OnInit {

  constructor(private router: Router) {
    addIcons({pricetagOutline, heartOutline, addCircleOutline, notificationsOutline})
   }

   navigateTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit() {}

}
