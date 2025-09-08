import { Component } from '@angular/core';
import { Header } from '../shared/component/header/header';
import { Footer } from '../shared/component/footer/footer';

import { BolsosList } from '../shared/component/bolsos-list/bolsos-list';

@Component({
  selector: 'app-bolsos',
  imports: [Header,Footer,BolsosList],
  templateUrl: './bolsos.html',
  styleUrl: './bolsos.css'
})
export class Bolsos {

}
