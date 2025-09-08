import { Component } from '@angular/core';
import { Header } from '../shared/component/header/header';
import { Footer } from '../shared/component/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [Header,Footer,RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
