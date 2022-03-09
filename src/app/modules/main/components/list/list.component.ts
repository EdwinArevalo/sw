import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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

  ngOnInit(): void {

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
