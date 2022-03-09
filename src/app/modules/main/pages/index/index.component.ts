import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { User } from 'src/app/data/schemas/user/user.interface';
import { ConnectionService } from 'src/app/services/connection.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  constructor( 
    ){ 
  }

  items! : MenuItem[];

  ngOnInit(): void { 

      this.items = [
        {
          label: 'Nuevo',
          icon:'pi pi-fw pi-plus',
          routerLink: '/counselor/contacts/new',
          command: () => {
            // this.activeItem = this.items[0];
          }
        },
        {
          label: 'Listado',
          icon:'pi pi-fw pi-list',
          routerLink: '/counselor/contacts/list',
          command: () => {
            // this.activeItem = this.items[1];
          }
        },
      ]

      // this.activeItem = this.items[0];
  }
  
  

  // sync(){
  //   setTimeout(() => {
  //     this.messageService.add({key: 'tc', severity:'success', summary: 'Éxito', detail: 'Sincronizado correctamente'});
  //   }, 1000);
  // }

}
