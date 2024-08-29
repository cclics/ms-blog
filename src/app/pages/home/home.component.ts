import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  featuredPostsArray: any[]=[];
  latestPostsArray: any[]=[];

  constructor( private postService: PostsService  ) {  }

  ngOnInit(): void {

    this.postService.loadFeaturedPosts().subscribe(val => {
      this.featuredPostsArray = val;
     })


    this.postService.loadLatestPosts().subscribe(val => {
      this.latestPostsArray = val;
     })

  }

}
