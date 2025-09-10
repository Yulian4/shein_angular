import { Component, Input } from '@angular/core';
import { Header } from '../shared/component/header/header';
import { Footer } from '../shared/component/footer/footer';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cart',
  imports: [Header, Footer, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  carrito: any[] = [];


  ngOnInit(): void {
    // cargar los productos guardados en localStorage
    const datos = localStorage.getItem('carrito');
    if (datos) {
      this.carrito = JSON.parse(datos);
    }
  }

  agregarProducto(producto: any) {
    this.carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  msj(producto: any) {
    if (producto.available == true) {
      Swal.fire({
        icon: "success",
        title: `${producto.name}`,
        text: "Gracias por tu compra :)",
        footer: '<a href="/ ">Volver a inicio</a>'
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `${producto.name}`,
        text: "Parece que este producto esta agotado, no puedes comprarlo",
        footer: '<a href="#">Volver al inicio :(</a>'
      });
    }
    console.log("presionado")
  }
}
