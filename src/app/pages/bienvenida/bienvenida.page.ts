import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  standalone: true,
  imports: [
  IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class BienvenidaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

}
