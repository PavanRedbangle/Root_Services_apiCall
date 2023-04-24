import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TestService],
})
export class HomeComponent {
  constructor(private ts:TestService){
    
  }
  mobile=this.ts.mobiles;
  
  homes(){
    question"what is your name"
  }
}
