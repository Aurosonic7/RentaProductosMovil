import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ListAdminComponent } from 'src/app/components/list-admin/list-admin.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonicModule, ListAdminComponent,HeaderComponent, CommonModule, FormsModule]
})
export class MainPage implements OnInit {

  adminItems = [
    { label: 'Usuarios', icon: 'person-circle-outline', route: '/admin/users' },
    { label: 'Publicaciones', icon: 'newspaper-outline', route: '/admin/posts' },
    { label: 'Comentarios', icon: 'chatbubbles-outline', route: '/admin/comments' },
    { label: 'Categorías', icon: 'list-outline', route: '/admin/categories' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
