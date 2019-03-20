import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Post } from '../posts';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {

  posts: Post [];
  postsSubscription: Subscription;

  @Input() title: string;
  @Input() content: string; 
  @Input() loveIts: number=0;
  @Input() created_at: number;

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

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

  onLoveIt(index: number) {
    this.postsService.addLove(index);
  }

  onDontLoveIt(index: number) {
    this.postsService.delLove(index);
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post);
  }

}
