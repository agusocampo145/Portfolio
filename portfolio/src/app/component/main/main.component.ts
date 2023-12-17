import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //TODO: No funciona goTo(id)
  goTo(id:string){
    document.getElementById(id)?.scrollTo()
  }

  hello:string = "Hola" 
  anios:number = 22

}
