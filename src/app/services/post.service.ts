import { Injectable, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
//import { PostsComponent } from '../posts-list/posts/posts.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();
    
  constructor(private httpClient: HttpClient) {
    this.getPosts();
  }
  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  /** Méthode qui incrémente le bouton "love it"  */
  love(i: number) {
    this.posts[i].loveIts += 1;
    this.savePosts();
  }
  /** Méthode qui décrémente le bouton "no love it"  */
  noLove(i: number) {
    this.posts[i].loveIts -= 1;
    this.savePosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
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

  getPostsFromServer() {
    this.httpClient
    .get<any[]>('https://postlist-d1baf.firebaseio.com/posts.json')
    .subscribe(
        (response) => {
            this.posts = response;
            this.emitPostSubject();
        },
        (error) => {
            console.log('Erreur de chargement' + error);
        }
    )
}

  

}
