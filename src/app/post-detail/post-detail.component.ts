import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export default class PostDetailComponent {
  private postsService = inject(PostsService);
  private route = inject(ActivatedRoute);

  slug = toSignal(
    this.route.params.pipe(
      switchMap(({ slug }) => this.postsService.getPostBySlug(slug))
    )
  );
}
