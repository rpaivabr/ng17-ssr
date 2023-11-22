import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export type Post = {
  slug: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('assets/posts.json')
  }

  getPostBySlug(slug: string): Observable<Post> {
    return this.http.get<Post[]>('assets/posts.json').pipe(map(posts => posts.find(post => post.slug === slug)!))
  }
}
