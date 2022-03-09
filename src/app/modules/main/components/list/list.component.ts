import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    MessageService
  ]
})
export class ListComponent implements OnInit {

  users!: any[];
  constructor(
    private dbService: DatabaseService,
    private messageService: MessageService,
  ) { }

  items: any;
  home!: MenuItem; 

  ngOnInit(): void {
    this.items = [
      {label: 'Contactos'},
      {label: 'Listado'},
    ];

    this.home = {icon: 'pi pi-home'};
    this.loadUserTable();

  } 

  loadUserTable(){
    this.users = [];

    this.dbService.getUsers()
        .then((res: any) => {
          let preUsers: any[] = [];
          res.rows.forEach(element => {
            preUsers.push(element.doc);
          });
          this.users = preUsers;

          // console.log(this.users);
        });
  } 

}
