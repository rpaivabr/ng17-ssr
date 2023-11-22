import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export default class PostListComponent {
  private postsService = inject(PostsService);
  
  posts = toSignal(this.postsService.getPosts(), { initialValue: [] })
}
