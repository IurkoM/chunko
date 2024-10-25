import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  constructor(
    public servicoAuth: AuthService,
    public servicioRutas: Router
  ){}

  usuarioIngresado:Usuario={
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  hide = true;
  /*
  public perfil: Usuario[];



  //en el siguiente arreglo importamos los datos del usuario
  constructor() {
    this.perfil = [
      {
        uid: '',
        email: 'franco@gmail.com',
        password: 'fortnite12',
        nombre: 'franco',
        apellido: 'quiroga',
        rol: 'vist'
      }
    ]
  }

  perfiles: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  coleccionPerfiles: Usuario[] = [];


  comparador() {
    //esta constante lo que hace es resguardar la informacion que ingrese el usuario
    const credenciales = {
      uid: this.perfiles.uid,
      nombre: this.perfiles.nombre,
      apellido: this.perfiles.apellido,
      email: this.perfiles.email,
      rol: this.perfiles.rol,
      password: this.perfiles.password,
    }
 //creo un for que recorra el arreglo con los usuarios subidos
    for (let i = 0; i <= this.perfil.length ; i++) {
      //creamos la constante 
      const orden = this.perfil[i]
      //creamos un if el cual compare los datos
      if (orden.uid === credenciales.uid && orden.nombre === credenciales.nombre && orden.apellido === credenciales.apellido && orden.email === credenciales.email && orden.rol === credenciales.rol && orden.password === credenciales.password) {
        alert("Inicio sesion correctamente")
        
      }else{
        alert("Erorr, los datos no son correctos")
        
      }
      
    }

    this.coleccionPerfiles.push(credenciales)

    console.log(credenciales);
    console.log(this.coleccionPerfiles)
  }*/
 

//funcion para iniciar sesion
    async iniciarSesion(){

  const credenciales= {
    email:this.usuarioIngresado.email,
    password:this.usuarioIngresado.password
  }

  try{

    //Obtenemos el usuario de la BD
    const usuarioBD = await this.servicoAuth.obtenerUsuario(credenciales.email);
    if(!usuarioBD || usuarioBD.empty){
      alert("Correo electronico no registrado");
      this.LimpiarInputs();
      return;
    }

    const usuarioDoc = usuarioBD.docs[0];

    const usuarioData = usuarioDoc.data() as Usuario;

    const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

    if (hashedPassword !== usuarioData.password) {
      alert("Contraseña incorrecta")
      this.usuarioIngresado.password ='';
      return;
    }

    const res= await this.servicoAuth.iniciosesion(credenciales.email, credenciales.password)
    .then(res =>{
      alert('se pudo iniciar sesion');
      this.servicioRutas.navigate(['/Inicio'])
    })
    .catch(err =>{
      alert('no se pudo iniciar sesion'+err)
  
      this.LimpiarInputs();
    })
  }catch(error){
    this.LimpiarInputs();
  }

  const res= await this.servicoAuth.iniciosesion(credenciales.email, credenciales.password)
  .then(res =>{
    Swal.fire({
      title: "buen trabajo",
      text: "inicion sesion con exito!",
      icon: "success"
    });
    this.servicioRutas.navigate(['/Inicio'])
  })
  .catch(err =>{
    Swal.fire({
      title: "oh no!",
      text: "no se pudo iniciar sesion!",
      icon: "error"
    });

    this.LimpiarInputs();
  })
 }

 LimpiarInputs(){
  const inputs={
    email: this.usuarioIngresado.email='',
    password:this.usuarioIngresado.password='',
  }
 }
}
