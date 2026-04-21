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

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('id');

      this.http.get(
        `http://127.0.0.1:8000/api/manga/${slug}/`
      ).subscribe(data => {
        this.manga = data;
      });

    });

  }
}