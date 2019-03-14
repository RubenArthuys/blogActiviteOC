import { Component } from '@angular/core';
import { Post } from './posts';
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

  title = 'blog Ruben';

  posts : Array<Post> = [
    new Post('Apollo', 'Apollo 17 (7 décembre 1972 - 19 décembre 1972) est la dernière mission du programme spatial Apollo à emmener des hommes à la surface de la Lune.', 0 ),
    new Post('Sanskrit','Le sanskrit est la langue des textes religieux hindous et bouddhistes ainsi que des textes littéraires ou scientifiques', 0),
    new Post ('Univers','Il n\'y a pas de centre dans l\'Univers, l\'espace \'gonfle\' simplement en tout point. Un observateur dans n\'importe quelle galaxie voit la plupart des autres galaxies de l\'univers s\'éloigner de lui. La seule réponse à la question "Où a eu lieu le Big Bang" est donc qu\'il s\'est produit partout.', 0)
  ];
}
