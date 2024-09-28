import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Define coleccion para los productos de la web del tipo de producto
  private productosCollection:AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    //referenciamos coleccion productos y sera subida como "producto" a firebase 
    this.productosCollection = database.collection('producto')
  }

  //CREAR METODOS PARA CREAR PRODUCTOS
  crearProducto(producto: Producto){
    return new Promise(async (resolve, reject)=>{
      try{
        //Creamos numero identificativo para el producto en la base de datos
        const idProducto=this.database.createId()
        //Asignamos ID creado al atributo IdProducto de la interfaz "Producto"
        producto.idProducto=idProducto;

        const resultado=await this.productosCollection.doc(idProducto).set(producto);

        resolve(resultado);
      }catch(error){
        reject(error);
      }
    })
  }
  //obtenerproductos
  obtenerProductos(){
    //snapchotChange toma una captura del estado de los datos
    //pipe funciona como una tuberia que retorna el nuevo arreglo de datos
    //map "mapea" o recorre esa nueva informacion
    //a resguarda la nueva info y la envia
    return this.productosCollection.stateChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
  //editar
  modificarProductos(idProducto:string, nuevaData:Producto){
    return this.database.collection('producto').doc(idProducto).update(nuevaData);
  }
  //eliminar
  eliminarProductos(idProducto:string){
    return new Promise((resolve,reject) =>{
      try{
        //accedo a la coleccion, busco su id y lo elimino
        const respuesta = this.productosCollection.doc(idProducto).delete();
        resolve(respuesta);
      }
      catch(error){
        reject(error);
      }
    })
  }
}
