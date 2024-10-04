import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonLabel,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule,
    FormsModule
  ]
})
export class BienvenidaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
