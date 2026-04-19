import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reader.html',
  styleUrls: ['./reader.css']
})
export class Reader {

  manga = '';
  chapter = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.manga = this.route.snapshot.paramMap.get('manga') || '';
    this.chapter = Number(this.route.snapshot.paramMap.get('chapter'));
  }

  nextChapter() {
    this.chapter++;
  }

  prevChapter() {
    if (this.chapter > 1) this.chapter--;
  }

}