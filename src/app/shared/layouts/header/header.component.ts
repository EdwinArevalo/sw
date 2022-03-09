import { Component, OnInit } from '@angular/core'; 
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit{

  items: MenuItem[] = [];
  constructor(
    private authService: AuthService
  ){ 
    
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Contacts',
        icon: 'pi pi-fw pi-clock',
        // routerLink: '/counselor/contacts',
        items: [
          {
            label: 'Añadir',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Listado',
            icon: 'pi pi-fw pi-list',
          }
        ]
      }
      
  ];
  }

  logout(){
    this.authService.logOut();
  }

}
