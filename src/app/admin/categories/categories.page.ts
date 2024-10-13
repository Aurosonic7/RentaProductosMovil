import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ListAdminComponent } from 'src/app/components/list-admin/list-admin.component';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [IonicModule, ListAdminComponent,HeaderComponent,CommonModule, FormsModule]
})
export class CategoriesPage implements OnInit {

  adminItems = [
    { label: 'Categoria 1', icon: '../../../assets/categories.svg', route: '/admin/users' },
    { label: 'Categoria 2', icon: '../../../assets/categories.svg', route: '/admin/posts' },
    { label: 'Categoria 3', icon: '../../../assets/categories.svg', route: '/admin/comments' },
    { label: 'Categoria 4', icon: '../../../assets/categories.svg', route: '/admin/categories' },
  ];

  constructor(private router: Router) {
    addIcons({arrowBackOutline})
   }

  ngOnInit() {
  }

  goAdminMain(){
    this.router.navigate(['/admin/main']);
  }

}
