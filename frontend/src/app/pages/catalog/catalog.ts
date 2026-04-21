import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css']
})
export class Catalog {

  searchText = '';
  selectedGenre = '';
  sortBy = '';

  mangas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {

    this.http.get<any[]>('http://127.0.0.1:8000/api/manga/')
      .subscribe(data => {
        this.mangas = data;
      });

    this.route.queryParamMap.subscribe(params => {
      const genre = params.get('genre');

      if (genre) {
        this.selectedGenre = genre;
      }
    });
  }

  filteredMangas() {
    let data = this.mangas;

    if (this.searchText) {
      data = data.filter(m =>
        m.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    if (this.selectedGenre) {
      data = data.filter(m =>
        m.genres.some((g:any) => g.name === this.selectedGenre)
      );
    }

    if (this.sortBy === 'rating') {
      data = [...data].sort((a, b) => b.rating - a.rating);
    }

    if (this.sortBy === 'title') {
      data = [...data].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return data;
  }
}