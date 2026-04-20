import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './popular.html',
  styleUrls: ['./popular.css']
})
export class Popular {

  mangas = [

{ id:2, title:'One Piece', image:'assets/manga/onepiece.jpg', rating:9.8 },
{ id:27, title:'Berserk', image:'assets/manga/berserk.jpg', rating:9.9 },
{ id:4, title:'Attack on Titan', image:'assets/manga/aot.jpg', rating:9.7 },
{ id:14, title:'Solo Leveling', image:'assets/manga/solo.jpg', rating:9.6 },
{ id:12, title:'Hunter x Hunter', image:'assets/manga/hxh.jpg', rating:9.5 },
{ id:5, title:'Death Note', image:'assets/manga/deathnote.jpg', rating:9.4 },
{ id:28, title:'Vinland Saga', image:'assets/manga/vinland.jpg', rating:9.4 },
{ id:29, title:'Kingdom', image:'assets/manga/kingdom.jpg', rating:9.3 },
{ id:11, title:'Dragon Ball', image:'assets/manga/dragonball.jpg', rating:9.3 },
{ id:1, title:'Naruto', image:'assets/manga/naruto.jpg', rating:9.1 }

];

}