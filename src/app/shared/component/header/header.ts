import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  cantidadCarrito: number = 0;
  aggCarrito() {
    this.cantidadCarrito++;
  }

}
