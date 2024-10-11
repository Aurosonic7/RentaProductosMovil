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
    { label: 'Usuarios', icon: '../../../assets/users.svg', route: '/admin/users' },
    { label: 'Publicaciones', icon: '../../../assets/newspaper.svg', route: '/admin/posts' },
    { label: 'Comentarios', icon: '../../../assets/comments.svg', route: '/admin/comments' },
    { label: 'Categorías', icon: '../../../assets/categories.svg', route: '/admin/categories' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
