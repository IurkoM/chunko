import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
product:string='';

productoCarrusel:Producto[]=[];

productoAnadido(producto:Producto){
  this.product='${producto.nombre} : $${producto.precio}';
  try {
    this.productoCarrusel.push(producto);

    Swal.fire({
      title:'Bien',
      text:'Ha añadido este producto con exito',
      icon:'info'
    })
  } catch (error) {
    Swal.fire({
      title:'¡Oh no!',
      text:'Ha ocurrido un error\n'+error,
      icon:'error'
    });
  }
}

}
