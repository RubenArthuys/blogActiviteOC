import { Injectable } from '@angular/core';
import { Post } from '../posts';
import { Subject } from 'rxjs';

@Injectable ()

export class PostsService {

  posts: Post[];
  postsSubject = new Subject<Post[]>();

  addPost() {

  }

  deletePost() {
    
  }

}