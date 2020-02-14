import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../posts.model';
import {PostsService} from '../posts.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  //  posts = [
  //       { title: "first post", content: "This is the first post content"},
  //       { title: "second post", content: "This is the second post content"},
  //       { title: "third post", content: "This is the third post content"}
  //  ];
  posts: Post[] = [];
  private postSub:  Subscription;

  constructor(public postsService: PostsService) {

  }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdatedListener().subscribe((posts: Post[]) => {
       this.posts = posts;
    });
  }

  ngOnDestroy() {
     this.postSub.unsubscribe();
  }
}
