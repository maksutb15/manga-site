import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  allManga: any[] = [];

  popular: any[] = [];
  korea: any[] = [];
  japan: any[] = [];
  china: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get<any[]>('http://127.0.0.1:8000/api/manga/')
      .subscribe(data => {

        this.allManga = data;

        this.popular = data
          .sort((a,b) => b.rating - a.rating)
          .slice(0,8);

        this.korea = data
          .filter(m => m.country === 'Korea')
          .slice(0,5);

        this.japan = data
          .filter(m => m.country === 'Japan')
          .slice(0,5);

        this.china = data
          .filter(m => m.country === 'China')
          .slice(0,5);

      });

  }

}