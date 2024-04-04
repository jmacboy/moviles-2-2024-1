import { Component } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/Comment';
import { CommentinfoComponent } from '../../components/commentinfo/commentinfo.component';

@Component({
  selector: 'app-postdetail',
  standalone: true,
  imports: [CommonModule, CommentinfoComponent],
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.scss'
})
export class PostdetailComponent {
  post?: Post;
  comments: Comment[] = [];
  constructor(
    private api: PostsService,
    private apiComments: CommentsService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
        this.loadPostDetail(params["id"]);
        this.loadComments(params["id"]);
    });
  }
  loadPostDetail(id: number) {
    this.api.getPost(id).subscribe(data => {
      this.post = data;
    });
  }
  loadComments(id: number){
    this.apiComments.getComments(id).subscribe(data => {
      this.comments = data;
    });
  }
}
