import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { mangas } from '../../manga-data';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  popular = mangas.filter(m =>
    [
      'Naruto',
      'Bleach',
      'Attack on Titan',
      'Death Note',
      'Lookism',
      'Solo Leveling',
      'Nano Machine',
      'Blue Lock'
    ].includes(m.title)
  );

  korea = mangas.filter(m => m.country === 'Korea').slice(0,5);

  japan = mangas.filter(m => m.country === 'Japan').slice(0,5);

  china = mangas.filter(m => m.country === 'China').slice(0,5);

}