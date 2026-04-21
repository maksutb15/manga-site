import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Manga } from '../../interfaces/manga';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './popular.html',
  styleUrls: ['./popular.css']
})
export class Popular {

  loading = false;
  error = '';

 mangas: Manga[] = [

    { id:2, title:'One Piece', slug:'onepiece', image:'assets/manga/onepiece.jpg', rating:9.8 },

    { id:27, title:'Berserk', slug:'berserk', image:'assets/manga/berserk.jpg', rating:9.9 },

    { id:4, title:'Attack on Titan', slug:'aot', image:'assets/manga/aot.jpg',  rating:9.7 },

    { id:14, title:'Solo Leveling', slug:'sololeveling', image:'assets/manga/solo.jpg', rating:9.6 },

    { id:12, title:'Hunter x Hunter', slug:'hunterxhunter', image:'assets/manga/hxh.jpg', rating:9.5 },

    { id:5, title:'Death Note', slug:'deathnote', image:'assets/manga/deathnote.jpg', rating:9.4 },

    { id:28, title:'Vinland Saga', slug:'vinlandsaga', image:'assets/manga/vinland.jpg', rating:9.4 },

    { id:29, title:'Kingdom', slug:'kingdom', image:'assets/manga/kingdom.jpg', rating:9.3 },

    { id:11, title:'Dragon Ball', slug:'dragonball', image:'assets/manga/dragonball.jpg', rating:9.3 },

    { id:1, title:'Naruto', slug:'naruto', image:'assets/manga/naruto.jpg', rating:9.1 }

  ];

}