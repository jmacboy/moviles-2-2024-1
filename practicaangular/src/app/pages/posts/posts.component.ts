import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/Post';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: Post[] = [];
  constructor(private api: PostsService) {
    this.api.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
