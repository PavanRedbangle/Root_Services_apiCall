import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [TestService],
})
export class ContactComponent {
  constructor(private tk:TestService){}
  mob=this.tk.mobiles;
  
  add_device(){

    this.tk.mobiles.push("nokia")
  }
}
