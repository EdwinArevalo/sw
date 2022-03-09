import { Component, OnInit } from '@angular/core'; 
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit{

  items: MenuItem[] = [];
  fullname!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ){ 
    
  }

  ngOnInit(): void {

    this.fullname = this.authService.getUser()['fullname']; 

    this.items = [
      {
        label: `${this.fullname}`,
        icon: 'pi pi-user'
      },
      {
        label: 'Contactos',
        icon: 'pi pi-fw pi-clock',
        routerLink: '/counselor/contacts',
        command: () => {
            this.router.navigateByUrl(this.router.url);
        },
        items: [
          {
            label: 'Listado',
            icon: 'pi pi-fw pi-list',
            routerLink: '/counselor/contacts/list',
          },
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/counselor/contacts/new',
          },
          
        ]
      }
      
  ];
  }

  logout(){
    this.authService.logOut();
  }

}
