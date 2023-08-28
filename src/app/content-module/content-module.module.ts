import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../content-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ContentService
  ]
})
export class ContentModule { }
