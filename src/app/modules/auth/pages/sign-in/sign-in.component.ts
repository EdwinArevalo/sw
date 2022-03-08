import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Credentials } from '../../../../schemas/user/credentials.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [
    MessageService
  ]
})
export class SignInComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    ) { }

  loginForm: FormGroup = this.fb.group({
    username: [ , [ Validators.required] ],
    password: [ , [ Validators.required] ],
  })

  isFieldValid( campo: string ) {

    return this.loginForm.controls[campo].errors 
            && this.loginForm.controls[campo].touched;
  }

  login(){

    if ( this.loginForm.invalid )  {
      this.loginForm.markAllAsTouched();
      return;
    }

    const credentials: Credentials = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.authService.signIn(credentials)
      .subscribe(
        (res) => {
          console.log(res);
          if (res.code == 401) {
            this.messageService.add({key: 'tc', severity:'error', summary: 'Credenciales incorrectas', detail: 'Usuario o password inválido'});
          }else if (res.code == 0){
            this.loginForm.reset();
            this.router.navigate(['counselor','contacts']);
          } 
        },
        (err) => {
          this.messageService.add({key: 'tc', severity:'error', summary: 'Error', detail: 'Contáctese con el administrador'});
        }
      ); 
  }

  ngOnInit(): void {
  }

}
