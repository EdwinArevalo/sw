import { Injectable } from '@angular/core';
import PouchDb from 'pouchdb-browser';

import { User } from '../schemas/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private db: any;

  constructor() {
    this.db = new PouchDb('myLocalDB');
   }

   addUSer(newUser: User){
    this.db.post(newUser);
   }

   getUsers = () => new Promise( (resolve, reject) => {
     this.db.allDocs({
       include_docs: true,
       attachments: true
     }).then((result) => {
       resolve(result)
     }).catch((err) => {
      reject(null)
     });
   });

   syncUsers(){

   }
}
