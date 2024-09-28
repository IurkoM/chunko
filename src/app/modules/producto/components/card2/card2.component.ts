import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
// Definimos colección local de productos
coleccionProductos: Producto[] = [];

// Variable local para obtener producto seleccionado
productoSeleccionado!: Producto;

// Variable para manejar estado de un modal
modalVisible: boolean = false;

compraVisible: boolean = false;

@Input()productoReciente:string='';

@Output()productoAgregado=new EventEmitter<Producto>;

constructor(public servicioCrud: CrudService){}

ngOnInit(): void{
  this.servicioCrud.obtenerProductos().subscribe(producto => {
    this.coleccionProductos = producto;
  })
}

// Función para modal que muestre la información de un producto en específico
mostrarVer(info: Producto){
  // Habilita visibilidad del modal
  this.modalVisible = true;

  // Guarda información de un producto elegido por el usuario
  this.productoSeleccionado = info;
}

agregarProducto(info:Producto){
  this.productoAgregado.emit(info);

  this.compraVisible=true;
}

}
