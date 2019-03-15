import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var config = {
      apiKey: "AIzaSyCwRSfdWio3V6h45XuBh0q0mdwGL44eIao",
      authDomain: "blogactiviteoc.firebaseapp.com",
      databaseURL: "https://blogactiviteoc.firebaseio.com",
      projectId: "blogactiviteoc",
      storageBucket: "blogactiviteoc.appspot.com",
      messagingSenderId: "77827263825"
    };
    firebase.initializeApp(config);
  }
}
