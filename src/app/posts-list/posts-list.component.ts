import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

  @Input() postTitle: string;
  @Input() postStatus: string;
  @Input() loveIts: number= 0;
  
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostService, private router: Router) { }

  ngOnInit() {

    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  /** Méthode qui incrémente le bouton "love it"  */
  love() {
    this.loveIts += 1;
  }

  /** Méthode qui décrémente le bouton "no love it"  */
  noLove() {
    this.loveIts -= 1;
  }

  /** Méthode qui change la couleur du titre du post  */
  getColor() {
    if(this.loveIts > 0) {
      return this.postStatus = 'green';
    } else if(this.loveIts < 0) {
      return this.postStatus = 'red';
    }
  }

  onNewPost() {
    this.router.navigate(['/post', 'new']);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

  

}
