import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forum.html',
  styleUrl: './forum.css'
})
export class Forum implements OnInit {

  title = '';
  text = '';
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/forum/')
      .subscribe(data => this.posts = data);
  }

  createHeaders() {
    const token = localStorage.getItem('access');

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  createPost() {
    this.http.post(
      'http://127.0.0.1:8000/api/forum/create/',
      {
        title: this.title,
        text: this.text
      },
      { headers: this.createHeaders() }
    ).subscribe(() => {
      this.title = '';
      this.text = '';
      this.loadPosts();
    });
  }

  reply(postId: number, text: string) {
    this.http.post(
      `http://127.0.0.1:8000/api/forum/reply/${postId}/`,
      { text },
      { headers: this.createHeaders() }
    ).subscribe(() => this.loadPosts());
  }

  deletePost(postId: number) {
    this.http.delete(
      `http://127.0.0.1:8000/api/forum/delete/${postId}/`,
      { headers: this.createHeaders() }
    ).subscribe(() => this.loadPosts());
  }

  editPost(post: any) {
    const newTitle = prompt('New title:', post.title);
    const newText = prompt('New text:', post.text);

    if (!newTitle || !newText) return;

    this.http.put(
      `http://127.0.0.1:8000/api/forum/edit/${post.id}/`,
      {
        title: newTitle,
        text: newText
      },
      { headers: this.createHeaders() }
    ).subscribe(() => this.loadPosts());
  }

  isOwner(username: string): boolean {
    return localStorage.getItem('username') === username;
  }

}