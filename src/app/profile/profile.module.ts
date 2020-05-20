import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HeaderComponent, IntroComponent, AboutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    IntroComponent,
    AboutComponent
  ]
})
export class ProfileModule { }
