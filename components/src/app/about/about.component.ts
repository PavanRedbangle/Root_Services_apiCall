import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  datas:any;
  constructor(private http:HttpClient){}
  
  getData(){
    this.http.get("https://fakestoreapi.com/products?limit=10")
    .subscribe((data)=>{
      this.datas=data
    })
  }
}
