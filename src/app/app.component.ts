import { Component } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
  Form={nombre:"mario"};
  log;
  //datos=["A", "B", "C", "D", "E"];
  /*datos = [
    {nombre:"Mario", email:"mario@gmail.com", edad:38},
    {nombre:"Horacio", email:"horacio@gmail.com", edad:56},
    {nombre:"Maria", email:"Maria@gmail.com", edad:23},
    {nombre:"Josè", email:"jose@gmail.com", edad:85}
  ];*/
  p1 = new Persona("Mario", "mario@gmail.com", 38);
  p2 = new Persona("Horacio", "horacio@gmail.com", 56);
  p3 = new Persona("Maria", "Maria@gmail.com", 23);
  p4 = new Persona("Josè", "jose@gmail.com", 85);
  datos = [this.p1, this.p2, this.p3, this.p4];
  //datos = [];

  settings={
    columns:{
      Nombre:{
        title:"Nombre",
        editable:false,
        editor:{
          type:"textarea"
        }
      },
      Email:{
        title:"Email"
      },
      Edad:{
        title:"Edad"
      }
    },
    pager:{
      perPage:2
    },
    noDataMessage:"No hay datos",
    actions:{
      edit:true,
      add:true,
      delete:true
    },
    edit:{
      editButtonContent:"Editar",
      createButtonContent:"Crear",
      cancelButtonContent:"Cancelar",
      confirmSave:true
    }
  };

  miFuncion(dato){
    console.log(dato, this.Form);
    this.log = true;
  }
  miFuncion2(){
    this.log = false;
  }
  editar(event){
    console.log(event);
  }
}

class Persona{
    Nombre;
    Email;
    Edad;
    constructor(nomb, mail, edad){
      this.Nombre = nomb;
      this.Email = mail;
      this.Edad = edad;
    }
}


