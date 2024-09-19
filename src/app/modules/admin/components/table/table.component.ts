import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../service/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //CREAR COLECCION PRODUCTO
  coleccionProductos: Producto[] = []

  modalVisibleProducto:boolean=false;

  productoSeleccionado!:Producto;

  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void{
    this.servicioCrud.obtenerProductos().subscribe(producto =>{
      this.coleccionProductos=producto;
    })
  }

  async agregarProducto(){
    if(this.producto.valid){
      let nuevoProducto: Producto={
        idProducto:'',
        nombre:this.producto.value.nombre!,
        descripcion:this.producto.value.descripcion!,
        precio:this.producto.value.precio!,
        categoria:this.producto.value.categoria!,
        imagen:this.producto.value.imagen!,
        alt:this.producto.value.alt!
      }
      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto =>{
        alert("ha agregado un nuevo producto con exito :)");
        this.producto.reset();
      })
      .catch(error =>{
        alert("hubo un problema al aagregar un nuevo producto")
      })
    }
  }

  mostrarBorrar(productoSeleccionado:Producto){
    //abre el modal
    this.modalVisibleProducto=true;

    //toma los valores del producto  elegido
    this.productoSeleccionado = productoSeleccionado;

  }

  //funcion para borrar definitivamente
  borrarProducto(){
    this.servicioCrud.eliminarProductos(this.productoSeleccionado.idProducto)
    .then(respuesta => {
      alert("el producto se ha eliminado correctamente.")
    })
    .catch(error => {
      alert("no se ha podido eliminar el producto \n"+error)
    })
  }

  mostrarEditar(productoSeleccionado:Producto){
    this.productoSeleccionado=productoSeleccionado;

    this.producto.setValue({
      nombre:productoSeleccionado.nombre,
      precio:productoSeleccionado.precio,
      descripcion:productoSeleccionado.descripcion,
      categoria:productoSeleccionado.categoria,
      imagen:productoSeleccionado.imagen,
      alt:productoSeleccionado.alt
    })
  }

  editarProducto(){}
}
