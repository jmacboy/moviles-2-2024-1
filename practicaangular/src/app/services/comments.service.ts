import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }


  getComments(postId: number) {
    return this.http.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments'
    );
  }
}
