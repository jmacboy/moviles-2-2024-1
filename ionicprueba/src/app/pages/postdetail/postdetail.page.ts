import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.page.html',
  styleUrls: ['./postdetail.page.scss'],
})
export class PostdetailPage {
  post?: Post;
  constructor(
    private api: PostsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(routeParams => {
      this.loadPost(routeParams['id']);
    });
  }

  loadPost(id: number) {
    this.api.getPostDetail(id).subscribe(data => {
      this.post = data;
    });
  }

}
