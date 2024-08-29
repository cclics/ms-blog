import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {

  constructor() {}

  @Input() postData: any;
  //@Input() postData: Object;
  
  ngOnInit(): void {}
  
}
