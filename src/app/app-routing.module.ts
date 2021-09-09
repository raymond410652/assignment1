import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  
  {path:"login",component: LoginComponent},
  {path:"account", component: AccountComponent},
  {path:"chat", component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
