import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, CommonModule, FormsModule]
})
export class MainPage implements OnInit {

  adminItems = [
    { label: 'Usuarios', icon: 'person-circle-outline', route: '/users' },
    { label: 'Publicaciones', icon: 'newspaper-outline', route: '/posts' },
    { label: 'Comentarios', icon: 'chatbubbles-outline', route: '/comments' },
    { label: 'Categorías', icon: 'list-outline', route: '/categories' },
  ];

  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit() {
  }

}
