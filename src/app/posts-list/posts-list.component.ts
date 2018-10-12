import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  
  
  posts: Post[];
  postsSubscription: Subscription;
  
  constructor(private postsService: PostService, private router: Router) {
    this.postsService.getPosts();
  }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
    this.posts = this.postsService.posts;
  }

  onNewPost() {
    this.router.navigate(['/post', 'new']);
  }

  
  

  

  

}
