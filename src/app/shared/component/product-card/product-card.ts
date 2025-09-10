import { Component, EventEmitter, input, Output, signal } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  img = input<string>();
  name = input<string>();
  price = input<number>();
  available = input<boolean>();

  modal = signal(false);

  mostrarModal() {
    this.modal.update(v => !v);
  }

  onAgregarClick() {
    const producto = {
      img: this.img(),
      name: this.name(),
      price: this.price(),
      available: this.available()
    };


    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');


    carrito.push(producto);


    localStorage.setItem('carrito', JSON.stringify(carrito));

    console.log('Producto agregado:', producto);
  }
}