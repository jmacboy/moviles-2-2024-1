import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-listaposts',
  templateUrl: './listaposts.page.html',
  styleUrls: ['./listaposts.page.scss'],
})
export class ListapostsPage implements OnInit {
  posts: Post[] = [];

  constructor(private api: PostsService) { }

  ngOnInit() {
    this.loadPosts();
  }
  loadPosts() {
    this.api.getPostList().subscribe(data => {
      this.posts = data;
    });
  }

}
