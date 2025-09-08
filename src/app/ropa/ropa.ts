import { Component } from '@angular/core';
import { Header } from '../shared/component/header/header';
import { Footer } from '../shared/component/footer/footer';
import { RopaList } from '../shared/component/ropa-list/ropa-list';

@Component({
  selector: 'app-ropa',
  imports: [Header,Footer,RopaList],
  templateUrl: './ropa.html',
  styleUrl: './ropa.css'
})
export class Ropa {

}
