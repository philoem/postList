import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  @Input() postDate: string;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() indexOfPost: number;
  
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
  }

  loveIt() {
    this.postsService.love(this.indexOfPost);
  }
  noLoveIt() {
    this.postsService.noLove(this.indexOfPost);
  }
    
  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }
  
  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
