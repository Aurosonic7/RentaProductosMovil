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
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [IonicModule, ListAdminComponent,HeaderComponent ,CommonModule, FormsModule]
})


export class UsersPage implements OnInit {

  adminItems = [
    { label: 'Usuario 1', icon: '../../../assets/users.svg', route: '/admin/users' },
    { label: 'Usuario 2', icon: '../../../assets/users.svg', route: '/admin/posts' },
    { label: 'Usuario 3', icon: '../../../assets/users.svg', route: '/admin/comments' },
    { label: 'Usuario 4', icon: '../../../assets/users.svg', route: '/admin/categories' },
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
