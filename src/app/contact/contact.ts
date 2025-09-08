import { Component } from '@angular/core';
import { Header } from '../shared/component/header/header';
import { Footer } from '../shared/component/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Header,Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
