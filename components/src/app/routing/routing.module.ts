import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AboutComponent,ContactComponent,HeaderComponent,HomeComponent,NotfoundComponent]
})
export class RoutingModule { }
