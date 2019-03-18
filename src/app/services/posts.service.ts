import { Injectable } from '@angular/core';
import { Post } from '../posts';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable ()

export class PostsService {

  posts: Post[] = [];
  loveIts = [];
  postsSubject = new Subject<Post[]>();

  love(post: Post) {
    const postIndexToLove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    firebase.database().ref('child/posts').set(this.loveIts);
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  deletePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

}