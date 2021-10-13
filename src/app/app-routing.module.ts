import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { AddListComponent } from './add-list/add-list.component';

const routes: Routes = [
  
  {path:"login/:user.id",component: LoginComponent},
  {path:"account", component: AccountComponent},
  {path:"chat", component: ChatComponent},
  {path:"register", component: RegisterComponent},
  {path:"edit/:user.id", component: EditComponent},
  {path:"list", component: ListComponent},
  {path:"add-list", component: AddListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
