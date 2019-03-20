import { Injectable } from '@angular/core';
import { Post } from '../posts';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable ()

export class PostsService {

  constructor() { }

  posts: Post[] = [];
  loveIts: number;
  postsSubject = new Subject<Post[]>();

  addLove(index: number) {
    // console.log(index);
    // console.log(this.posts[index]);
    this.posts[index].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  delLove(index:number) {
    this.posts[index].loveIts--;
    this.savePosts();
    this.emitPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value', 
      (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
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
      (postIndex) => {
        if(postIndex === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

}