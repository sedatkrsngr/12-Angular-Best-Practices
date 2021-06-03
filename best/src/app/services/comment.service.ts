import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getAllComment():Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      "https://jsonplaceholder.typicode.com/comments"
    );
  }
}
