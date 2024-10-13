import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-interfaz-agregar-producto',
  templateUrl: './interfaz-agregar-producto.page.html',
  styleUrls: ['./interfaz-agregar-producto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InterfazAgregarProductoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
