import { Component, OnInit } from '@angular/core'; 
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit{

  items: MenuItem[] = [];
  constructor(){ 
    
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

}
