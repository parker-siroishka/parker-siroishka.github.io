import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [HeaderComponent, IntroComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    IntroComponent
  ]
})
export class ProfileModule { }
