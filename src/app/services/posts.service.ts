import { Injectable } from '@angular/core';
import { Post } from '../posts';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable ()

export class PostsService {

  posts: Post[];
  postsSubject = new Subject<Post[]>();


  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
  }

  deletePost(post: Post) {
    
  }

}