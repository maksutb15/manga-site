import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-manga-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './manga-detail.html',
  styleUrls: ['./manga-detail.css']
})
export class MangaDetail {

  manga: any;
  loading = true;
  error = '';
  readonly fallbackChapterCount = 5;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('id');

      this.loading = true;
      this.error = '';
      this.manga = null;

      if (!slug) {
        this.loading = false;
        this.error = 'Manga not found.';
        return;
      }

      this.loadManga(slug);

    });

  }

  private loadManga(slug: string): void {
    this.http.get(
      `http://127.0.0.1:8000/api/manga/${slug}/`
    ).subscribe({
      next: (data) => {
        this.manga = data;
        this.loading = false;
      },
      error: () => {
        this.loadMangaFromList(slug);
      }
    });
  }

  private loadMangaFromList(slug: string): void {
    this.http.get<any[]>(
      'http://127.0.0.1:8000/api/manga/'
    ).subscribe({
      next: (items) => {
        this.manga = items.find(item => item.slug === slug) || null;
        this.loading = false;
        this.error = this.manga ? '' : 'Failed to load manga details.';
      },
      error: () => {
        this.loading = false;
        this.error = 'Failed to load manga details.';
      }
    });
  }

  getSortedChapters(): any[] {
    if (this.manga?.chapters?.length) {
      return [...this.manga.chapters].sort((a, b) => a.number - b.number);
    }

    return Array.from(
      { length: this.fallbackChapterCount },
      (_, index) => ({ number: index + 1 })
    );
  }
}
