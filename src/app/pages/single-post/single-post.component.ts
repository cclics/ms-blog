import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit {

  postData: any;
  similarPostArray: any[] = [];

  constructor( private route : ActivatedRoute, private postService: PostsService ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(val => {

      this.postService.countViews(val.id);

      this.postService.loadOnePost(val.id).subscribe(post => {
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId);
      })

    })
  }

  loadSimilarPost(catId) {
    this.postService.loadSimilar(catId).subscribe(val =>{
      this.similarPostArray = val;
    })
  }
  
}
