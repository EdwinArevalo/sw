import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateGuard } from './secure/guards/validate.guard';
import { HeaderComponent } from './shared/layouts/header/header.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/counselor/contacts',
    pathMatch: 'full',
    // component: HeaderComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(
      (m) => m.AuthModule
      ),
    canLoad: [ValidateGuard], 
    canActivate: [ValidateGuard]
  }, 
  {
    path: '',
    component: HeaderComponent,
    children: [
        {
          path: 'counselor',
          loadChildren: () => import('./modules/main/main.module').then(
            (m) => m.MainModule
          ),
        },
        
      ]
  }, 
  {
    path: '**',
    redirectTo: 'counselor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
