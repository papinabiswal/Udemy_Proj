import { Post } from './posts.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({providedIn: 'root'})

export class PostsService {
  private  posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts(){
    return [...this.posts];
  }

  getPostUpdatedListener(){
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string){
      const post: Post = {title: title, content:content};
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);
  }
}
