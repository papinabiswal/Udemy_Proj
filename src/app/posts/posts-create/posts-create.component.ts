import { Component, EventEmitter } from '@angular/core';
import { Post } from '../posts.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service'

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostCreateComponent {

  enteredContent = "";
  enteredTitle = "";

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm){
    if(form.invalid){
       return;
    }
     this.postsService.addPost(form.value.title, form.value.content);
     form.resetForm();
  }
}
