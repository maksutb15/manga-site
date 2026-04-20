import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector:'app-genres',
  standalone:true,
  imports:[CommonModule, RouterLink],
  templateUrl:'./genres.html',
  styleUrls:['./genres.css']
})
export class Genres {

genres = [

{ name:'Action', image:'assets/genres/action.jpg' },
{ name:'Adventure', image:'assets/genres/adventure.jpg' },
{ name:'Fantasy', image:'assets/genres/fantasy.jpg' },
{ name:'Comedy', image:'assets/genres/comedy.jpg' },
{ name:'Drama', image:'assets/genres/drama.jpg' },
{ name:'Horror', image:'assets/genres/horror.jpg' },
{ name:'Psychological', image:'assets/genres/psychological.jpg' },
{ name:'Romance', image:'assets/genres/romance.jpg' },
{ name:'School', image:'assets/genres/school.jpg' },
{ name:'Sports', image:'assets/genres/sports.jpg' },
{ name:'Mystery', image:'assets/genres/mystery.jpg' },
{ name:'Martial Arts', image:'assets/genres/martial.jpg' }

];

}