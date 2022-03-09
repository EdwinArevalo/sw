import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from 'src/app/secure/guards/validate-token.guard';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contacts',
        component: IndexComponent,
        canLoad: [ValidateTokenGuard], 
        canActivate: [ValidateTokenGuard],
      },
      {
        path: '**',
        redirectTo: 'contacts' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
