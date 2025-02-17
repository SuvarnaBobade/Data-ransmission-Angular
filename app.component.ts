import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-Firstangular-app';
  username="suvarna";
  myphoto="G:\Suvarna_documents\photo1.jfif";
  clickme(){
    alert("hi")
  }
  num1=10;
}
