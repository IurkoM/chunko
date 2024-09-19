import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Definimos coleccion para los productos de la web del tipo producto
  private productoCollection: AngularFirestoreCollection<Producto>

  constructor(private database:AngularFirestore) {
    //Referenciamos coleccion productos y sera subida como "producto" a Firebase
    this.productoCollection=database.collection('producto');
   }

   //CREAR productos
   crearProducto(producto:Producto){
    return new Promise(async (resolve,reject) =>{
      try{
        //creamos numero identificativo para el producto en la base de datos
        const idProducto= this.database.createId();

        //asignamos ID creado al atributo idProducto de la interfaz "Producto"
        producto.idProducto=idProducto;

        const resultado=await this.productoCollection.doc(idProducto).set(producto);

        resolve(resultado);
      }catch(error){
        reject(error);
      }
    })
   }

   //OBTENER productos
   obtenerProducto(){
    //snapshotChanges -> toma una captura del estado de los datos
    //pipe -> funciona como una tuberia que retorna el nuevo arreglo de datos
    //map -> "mapea" o recorre esa nueva informacion
    // a -> resguarda la nueva informacion y la envia
    return this.productoCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())));
   }

   //EDITAR productos
   modificarProducto(idProducto:string, nuevaData: Producto){
    //accedemos a la coleccion, buscamos por ID y actulizamos informacion
    return this.database.collection('producto').doc(idProducto).update(nuevaData);
   }

   //ELIMINAR produtos
   eliminarProductos(idProducto:string){
    return new Promise((resolve,reject) => {
      try{
        //accedo a la coleccin, busco su ID y lo elimino
        const respuesta =this.productoCollection.doc(idProducto).delete();
        resolve(respuesta);
      }
      catch(error){
        reject(error);
      }
    })
   }
}