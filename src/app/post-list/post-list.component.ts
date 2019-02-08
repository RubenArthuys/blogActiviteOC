import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'Apollo',
      content: 'Apollo 17 (7 décembre 1972 - 19 décembre 1972) est la dernière mission du programme spatial Apollo à emmener des hommes à la surface de la Lune.',
      loveIts : 0,
      created_at: new Date()
    },
    {
      title: 'Sanskrit',
      content: 'Le sanskrit est la langue des textes religieux hindous et bouddhistes ainsi que des textes littéraires ou scientifiques',
      loveIts : 0,
      created_at: new Date()
    },
    {
      title: 'Univers',
      content: 'Il n\'y a pas de centre dans l\'Univers, l\'espace \'gonfle\' simplement en tout point. Un observateur dans n\'importe quelle galaxie voit la plupart des autres galaxies de l\'univers s\'éloigner de lui. La seule réponse à la question "Où a eu lieu le Big Bang" est donc qu\'il s\'est produit partout.',
      loveIts : 0,
      created_at: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
