import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonCard, IonItem, IonLabel, IonIcon, IonButton, IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-interfaz-productos',
  templateUrl: './interfaz-productos.page.html',
  styleUrls: ['./interfaz-productos.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonLabel, IonItem, IonCard, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonThumbnail]
})

export class InterfazProductosPage implements OnInit {

  productos: any[] = [
    //mis productos de ejemplo :p
    {
      id: 1,
      nombre: 'Producto 1',
      imagen: '/src/assets/bgLogin.png',
      categoria: 'Categoria 1',
    },
    {
      id: 2,
      nombre: 'Producto 2',
      imagen: '/src/assets/bgLogin.png',
      categoria: 'Categoria 1',
    },

  ];

  constructor() { }

  ngOnInit() {
    this.productos = this.obtenerProductosPorCategoria('Categoria 1');
  }

  obtenerProductosPorCategoria(categoria: string) {
    return this.productos.filter(producto => producto.categoria === categoria);
  }

  agregarAFavoritos(producto: any) {
    console.log(`Producto agregado a favoritos: ${producto.nombre}`);
  }

}
