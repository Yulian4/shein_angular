import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-product-card',
  imports: [NgClass],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  img = input<string>();
  name = input<string>();
  price = input<number>();
  available = input<boolean>();
}
