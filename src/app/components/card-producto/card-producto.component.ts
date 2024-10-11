import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';
import {
  IonCard,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonImg,
  IonCardContent,
  IonChip,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.scss'],
  imports: [
    IonCard,
    IonItem,
    IonLabel,
    IonIcon,
    IonButton,
    IonImg,
    IonCardContent,
    IonChip,
  ],
})
export class CardProductoComponent implements OnInit {
  constructor() {
    addIcons({ heart, heartOutline });
  }

  ngOnInit() {}
}
