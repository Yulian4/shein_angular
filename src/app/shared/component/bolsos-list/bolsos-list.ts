import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bolsos-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './bolsos-list.html',
  styleUrl: './bolsos-list.css'
})
export class BolsosList {
  productos = signal([
    {
      img: '/assets/products/bolsos/bag1.jpg',
      name: 'Bolsito lindo',
      price: 32500,
      available: true
    },
    {
      img: '/assets/products/bolsos/bag2.jpg',
      name: 'Bolso de hombro',
      price: 38000,
      available: true
    },
    {
      img: '/assets/products/bolsos/bag3.jpg',
      name: 'Bolso de hombro con correa ajustable',
      price: 45500,
      available: true
    },
    {
      img: '/assets/products/bolsos/bag4.jpg',
      name: 'Bolso de mano grande - negro',
      price: 62000,
      available: true
    },
    {
      img: '/assets/products/bolsos/bag5.jpg',
      name: 'Bolso de mano grande - cafe',
      price: 65000,
      available: true
    },
    {
      img: '/assets/products/bolsos/bag6.jpg',
      name: 'Bolso negro con correa ajustable',
      price: 47800,
      available: true
    },
    {
      img: '/assets/products/bolsos/bag7.jpg',
      name: 'Bolsito lindo',
      price: 35000,
      available: true
    },
    {
      img: '/assets/products/bolsos/bag8.jpg',
      name: 'Bolso pequeño de hombro vinotinto',
      price: 45000,
      available: true
    },
    {
      img: '/assets/products/bolsos/bag9.jpg',
      name: 'Bolso pequeño - cafe',
      price: 57000,
      available: true
    },
    {
      img: '/assets/products/bolsos/bag10.jpg',
      name: 'Bolso con moño y correa ajustable',
      price: 60000,
      available: true
    }
  ])
}
