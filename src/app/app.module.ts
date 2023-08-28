import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModuleComponent } from './browser-module/browser-module.component';
import { LoginComponent } from './login-component/login-component.component';
import { ContentItemComponent } from './content-item-component/content-item-component.component';
import { ExamListComponentComponent } from './exam-list-component/exam-list-component.component';
import { AuthenticationModule } from './authentication-module/authentication-module.module';
import { ContentModule } from './content-module/content-module.module';
import { ExamsModule } from './exams-module/exams-module.module';
import { SidebarComponent } from './sidebar-component/sidebar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserModuleComponent,
    LoginComponent,
    ContentItemComponent,
    SidebarComponent,
    ExamListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Agrega HttpClientModule aquí
    AuthenticationModule,
    ContentModule,
    ExamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

