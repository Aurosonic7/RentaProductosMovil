import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';
import { HeaderComponent } from "../../components/header/header.component";
import { CardProductoComponent } from "../../components/card-producto/card-producto.component";
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-interfaz-productos',
  templateUrl: './interfaz-productos.page.html',
  styleUrls: ['./interfaz-productos.page.scss'],
  standalone: true,
  imports: [IonicModule,
  CommonModule,
    FormsModule, HeaderComponent, CardProductoComponent, NavbarComponent],
})
export class InterfazProductosPage implements OnInit {
  constructor() {
    addIcons({heart,heartOutline});
  }

  ngOnInit() {}
}
