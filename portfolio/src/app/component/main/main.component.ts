import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { interval } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  helloInLanguages = [
    '¡ Hola !',
    '¡ Bonjour !',
    '¡ Hello !',
    '¡ Olá !',
    'こんにちは',
  ];
  hello: string = this.helloInLanguages[0];
  anios: number = 22;
  blobNumber = 3;

  ngOnInit(): void {
    this.translateHello();
    this.bounceBlobs();
  }

  goTo(id: string) {
    var topPos = document.getElementById(`${id}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  translateHello() {
    var translateList = 1;
    var helloInLanguagesTranslate = this.helloInLanguages;
    setInterval(function () {
      changeText(helloInLanguagesTranslate, translateList);
      translateList++;
      if (translateList == helloInLanguagesTranslate.length) {
        translateList = 0;
      }
    }, 3000);
  }

  bounceBlobs() {
    for(var i = 0; i < this.blobNumber + 1; i++){
      moveBlob(`blob${i}`)
    }
  }
}

function changeText(
  helloInLanguagesTranslate: string[],
  translateList: number
) {
  var helloText = document.getElementById('helloText')!;
  helloText.style.opacity = '0';
  setTimeout(function () {
    helloText.innerHTML = helloInLanguagesTranslate[translateList];
    helloText.style.opacity = '1';
  }, 500);
}

function moveBlob(blobNumber:string){
  const section = document.getElementById('blobContainer')!;
  const logo = <HTMLElement> document.getElementById(blobNumber)!;
  const FPS = 60;
  section.style.height = window.innerHeight + 'px';
  section.style.width = window.innerWidth + 'px';

  // Logo moving velocity Variables
  let xPosition = Math.floor(Math.random() * 800);
  let yPosition = Math.floor(Math.random() * 300);
  let xSpeed = 4;
  let ySpeed = 4;

  setInterval(() => {
    if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
      xSpeed = -xSpeed;
      logo.style.fill = randomColor();
    }
    if (
      yPosition + logo.clientHeight >= window.innerHeight ||
      yPosition <= 0
    ) {
      ySpeed = -ySpeed;
      logo.style.fill = randomColor();
    }

    xPosition += xSpeed;
    yPosition += ySpeed;
    logo.style.left = xPosition + 'px';
    logo.style.top = yPosition + 'px';
    ;
  }, 1000 / FPS);
  function randomColor() {
    let color = '#';
    color += Math.random().toString(16).slice(2, 8).toUpperCase();

    return color;
  }
  console.log(randomColor());

  window.addEventListener('resize', () => {
    xPosition = 10;
    yPosition = 10;

    section.style.height = window.innerHeight + 'px';
    section.style.width = window.innerWidth + 'px';
  });
}
