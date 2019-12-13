import { Component } from '@angular/core';
//import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name;
  last;
  profession;
  db;
  

  constructor() 
  {
    this.db=firebase.firestore();
    
  }

  enviar()
  {
    console.log(this.name)
    
    this.db.collection("usuario").add({
      nombre: this.name,
      apellido: this.last,
      ocupacion: this.profession
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  
}
