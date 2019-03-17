import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../posts';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string; 
  @Input() loveIts: number=0;
  @Input() dontLove: number=0;
  @Input() created_at: object;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  loveIt() {
    this.loveIts ++;
    this.postsService.love();
  }

  dontLoveIt() {
    this.dontLove ++;
    this.postsService.love();
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post);
  }
}
