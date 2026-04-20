import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  pdfUrl!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.manga = params.get('manga') || '';
      this.chapter = Number(params.get('chapter')) || 1;

      this.loadPdf();
    });
  }

  loadPdf() {
    const path =
      'assets/pdf/' +
      this.manga +
      '/chapter' +
      this.chapter +
      '.pdf';

    this.pdfUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(path);
  }

  nextChapter() {
    this.router.navigate(['/read', this.manga, this.chapter + 1]);
  }

  prevChapter() {
    if (this.chapter > 1) {
      this.router.navigate(['/read', this.manga, this.chapter - 1]);
    }
  }

}