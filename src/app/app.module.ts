import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule} from './app-routing/app-routing.module';

import 'hammerjs';

import { TaskService } from './services/task.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { baseURL } from './shared/baseurl';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TaskdetailComponent
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
    TaskService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
