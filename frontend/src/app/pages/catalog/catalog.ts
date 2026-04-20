import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports:[CommonModule, FormsModule, RouterLink],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css']
})
export class Catalog {

  searchText = '';
  selectedGenre = '';
  sortBy = '';

  mangas = [

{
id:1,
title:'Naruto',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Action','Adventure','Comedy','Martial Arts'],
image:'assets/manga/naruto.jpg',
rating:9.1
},

{
id:2,
title:'One Piece',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Action','Adventure','Fantasy','Comedy'],
image:'assets/manga/onepiece.jpg',
rating:9.8
},

{
id:3,
title:'Bleach',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Action','Fantasy','Supernatural'],
image:'assets/manga/bleach.jpg',
rating:8.9
},

{
id:4,
title:'Attack on Titan',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Action','Drama','Horror','Mystery'],
image:'assets/manga/aot.jpg',
rating:9.7
},

{
id:5,
title:'Death Note',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Psychological','Mystery','Thriller'],
image:'assets/manga/deathnote.jpg',
rating:9.4
},

{
id:6,
title:'Chainsaw Man',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Action','Horror','Comedy'],
image:'assets/manga/chainsawman.jpg',
rating:8.8
},

{
id:7,
title:'Jujutsu Kaisen',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Action','School','Supernatural'],
image:'assets/manga/jujutsu.jpg',
rating:9.0
},

{
id:8,
title:'Demon Slayer',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Action','Historical','Demons'],
image:'assets/manga/demonslayer.jpg',
rating:9.2
},

{
id:9,
title:'Tokyo Ghoul',
country:'Japan',
type:'Manga',
demographic:'Seinen',
genres:['Action','Horror','Psychological'],
image:'assets/manga/tokyoghoul.jpg',
rating:8.9
},

{
id:10,
title:'Black Clover',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Action','Fantasy','Magic'],
image:'assets/manga/blackclover.jpg',
rating:8.7
},

{
id:11,
title:'Dragon Ball',
country:'Japan',
type:'Manga',
demographic:'Kodomo',
genres:['Action','Adventure','Comedy'],
image:'assets/manga/dragonball.jpg',
rating:9.3
},

{
id:12,
title:'Hunter x Hunter',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Action','Adventure','Fantasy'],
image:'assets/manga/hxh.jpg',
rating:9.5
},

{
id:13,
title:'Boruto',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Action','Adventure','Sci-Fi'],
image:'assets/manga/boruto.jpg',
rating:8.2
},

{
id:14,
title:'Solo Leveling',
country:'Korea',
type:'Manhwa',
demographic:'Shonen',
genres:['Action','Fantasy','Dungeon'],
image:'assets/manga/solo.jpg',
rating:9.6
},

{
id:15,
title:'Lookism',
country:'Korea',
type:'Manhwa',
demographic:'Seinen',
genres:['Drama','School','Action'],
image:'assets/manga/lookism.jpg',
rating:8.8
},

{
id:16,
title:'The Boxer',
country:'Korea',
type:'Manhwa',
demographic:'Seinen',
genres:['Sports','Drama','Psychological'],
image:'assets/manga/boxer.jpg',
rating:9.0
},

{
id:17,
title:'Omniscient Reader',
country:'Korea',
type:'Manhwa',
demographic:'Shonen',
genres:['Action','Fantasy','Apocalypse'],
image:'assets/manga/orv.jpg',
rating:9.4
},

{
id:18,
title:'Tower of God',
country:'Korea',
type:'Manhwa',
demographic:'Shonen',
genres:['Action','Fantasy','Adventure'],
image:'assets/manga/tog.jpg',
rating:9.1
},

{
id:19,
title:'Wind Breaker',
country:'Korea',
type:'Manhwa',
demographic:'Shonen',
genres:['Sports','School','Drama'],
image:'assets/manga/windbreaker.jpg',
rating:8.8
},

{
id:20,
title:'Nano Machine',
country:'Korea',
type:'Manhwa',
demographic:'Seinen',
genres:['Action','Martial Arts','Fantasy'],
image:'assets/manga/nano.jpg',
rating:9.0
},

{
id:21,
title:'Eleceed',
country:'Korea',
type:'Manhwa',
demographic:'Shonen',
genres:['Action','Comedy','Superpower'],
image:'assets/manga/eleceed.jpg',
rating:8.9
},

{
id:22,
title:'Martial Peak',
country:'China',
type:'Manhua',
demographic:'Shonen',
genres:['Action','Fantasy','Martial Arts'],
image:'assets/manga/martialpeak.jpg',
rating:8.8
},

{
id:23,
title:'Apotheosis',
country:'China',
type:'Manhua',
demographic:'Shonen',
genres:['Fantasy','Action','Cultivation'],
image:'assets/manga/apotheosis.jpg',
rating:8.7
},

{
id:24,
title:'Tales of Demons and Gods',
country:'China',
type:'Manhua',
demographic:'Shonen',
genres:['Fantasy','Action','Reincarnation'],
image:'assets/manga/tales.jpg',
rating:8.7
},

{
id:25,
title:'Versatile Mage',
country:'China',
type:'Manhua',
demographic:'Shonen',
genres:['Magic','School','Action'],
image:'assets/manga/mage.jpg',
rating:8.5
},

{
id:26,
title:'Soul Land',
country:'China',
type:'Manhua',
demographic:'Shonen',
genres:['Fantasy','Adventure','Romance'],
image:'assets/manga/soulland.jpg',
rating:8.8
},

{
id:27,
title:'Berserk',
country:'Japan',
type:'Manga',
demographic:'Seinen',
genres:['Dark Fantasy','Action','Drama'],
image:'assets/manga/berserk.jpg',
rating:9.9
},

{
id:28,
title:'Vinland Saga',
country:'Japan',
type:'Manga',
demographic:'Seinen',
genres:['Historical','Action','Drama'],
image:'assets/manga/vinland.jpg',
rating:9.4
},

{
id:29,
title:'Kingdom',
country:'Japan',
type:'Manga',
demographic:'Seinen',
genres:['War','Historical','Action'],
image:'assets/manga/kingdom.jpg',
rating:9.3
},

{
id:30,
title:'Blue Lock',
country:'Japan',
type:'Manga',
demographic:'Shonen',
genres:['Sports','Drama','Competition'],
image:'assets/manga/bluelock.jpg',
rating:8.9
}

 ];
 constructor(private route: ActivatedRoute) {}

ngOnInit() {
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
      m.genres.includes(this.selectedGenre)
    );
  }

  if (this.sortBy === 'rating') {
    data = [...data].sort((a, b) =>
      (b.rating || 0) - (a.rating || 0)
    );
  }

  if (this.sortBy === 'title') {
    data = [...data].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return data;
} 
}