import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    // NzLayoutModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SidemenuComponent,
    // NzLayoutModule,
  ]
})
export class SharedModule { }
