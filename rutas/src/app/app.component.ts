import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variableEstas='estas';
  title = 'app';
  constructor(private  _router:Router){
  }

  irAInfo(){
  const url = ['/inicio', 'hola', 'como', 'estas'];
  this._router.navigate(url);
  }
  iraFAQ(){
    const url = ['/faq'];
    this._router.navigate(url);
  }
}
