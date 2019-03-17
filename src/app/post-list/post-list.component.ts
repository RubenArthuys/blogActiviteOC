import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../posts';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // posts : Array<Post> = [
  //   new Post('Apollo', 'Apollo 17 (7 décembre 1972 - 19 décembre 1972) est la dernière mission du programme spatial Apollo à emmener des hommes à la surface de la Lune.', 0 ),
  //   new Post('Sanskrit','Le sanskrit est la langue des textes religieux hindous et bouddhistes ainsi que des textes littéraires ou scientifiques', 0),
  //   new Post ('Univers','Il n\'y a pas de centre dans l\'Univers, l\'espace \'gonfle\' simplement en tout point. Un observateur dans n\'importe quelle galaxie voit la plupart des autres galaxies de l\'univers s\'éloigner de lui. La seule réponse à la question "Où a eu lieu le Big Bang" est donc qu\'il s\'est produit partout.', 0)
  // ];

  posts: Post [];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

}
