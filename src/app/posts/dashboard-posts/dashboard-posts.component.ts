import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { IPosts } from '../modelo/iposts';

@Component({
  selector: 'app-dashboard-posts',
  templateUrl: './dashboard-posts.component.html',
  styleUrl: './dashboard-posts.component.css'
})
export class DashboardPostsComponent implements OnInit{

  posts: IPosts[] = []

  constructor(private _service: PostServiceService){}

  ngOnInit(): void {
      this._service.getAllPosts().subscribe(
        response => this.posts = response
      )
  }

}
