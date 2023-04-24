import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http'

const routers:Routes=[
  {
    path:"",component:HomeComponent
  },
  {
  path:"about",component:AboutComponent
  },
  {
  path:"contact",component:ContactComponent
  },
  {
    path:"header",component:HeaderComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"**",component:NotfoundComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routers),
    HttpClientModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
