import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ropa-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './ropa-list.html',
  styleUrl: './ropa-list.css'
})
export class RopaList {
  productos = signal([
    {
      img: '/assets/products/ropa/clothes1.jpg',
      name: 'Sueter casual',
      price: 35000,
      available: false,
    },
      {
      img: '/assets/products/ropa/clothes2.jpg',
      name: 'Blusa cuello cuadrado',
      price: 30000,
      available: true
    },
    {
      img: '/assets/products/ropa/clothes3.jpg',
      name: 'Camisa dos piezas casual',
      price: 31000,
      available: true
    },
    {
      img: '/assets/products/ropa/clothes4.jpg',
      name: 'Vestido elegante con tirantes',
      price: 55000,
      available: true
    },
    {
      img: '/assets/products/ropa/clothes5.jpg',
      name: 'Blusa manga larga gris',
      price: 25000,
      available: false
    },
    {
      img: '/assets/products/ropa/clothes6.jpg',
      name: 'Conjunto elegante - beige',
      price: 75000,
      available: true
    },
    {
      img: '/assets/products/ropa/clothes7.jpg',
      name: 'Vestido coquette con tirantes ajustables',
      price: 57000,
      available: true
    },
    {
      img: '/assets/products/ropa/clothes8.jpg',
      name: 'Vestido con estampado y tirantes',
      price: 52000,
      available: true
    },
    {
      img: '/assets/products/ropa/clothes9.jpg',
      name: 'Vestido strapless - cafe',
      price: 48500,
      available: true
    },
    {
      img: '/assets/products/ropa/clothes10.jpg',
      name: 'Vestido coquette con tirantes ajustables',
      price: 52700,
      available: true
    },
    {
      img: '/assets/products/ropa/clothes11.jpg',
      name: 'Conjunto (No incluye bolso)',
      price: 78500,
      available: true
    },
    {
      img: '/assets/products/ropa/clothes12.jpg',
      name: 'Vestido cuello asimetrico',
      price: 62000,
      available: false
    },
    {
      img: '/assets/products/ropa/clothes13.jpg',
      name: 'Blusa cuello V - blanca',
      price: 34000,
      available: true
    },
    {
      img: '/assets/products/ropa/clothes14.jpg',
      name: 'Blusa blanca strapless',
      price: 24000,
      available: false
    },
    {
      img: '/assets/products/ropa/clothes15.jpg',
      name: 'Shorts elegantes blancos',
      price: 22000,
      available: true
    }
  ])
}
