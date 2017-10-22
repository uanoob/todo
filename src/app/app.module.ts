import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule} from './app-routing/app-routing.module';

import 'hammerjs';

import { TodoService } from './services/todo.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todolist/todo-list.component';
import { TodoDetailComponent } from './tododetail/todo-detail.component';
import { baseURL } from './shared/baseurl';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    TodoService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
