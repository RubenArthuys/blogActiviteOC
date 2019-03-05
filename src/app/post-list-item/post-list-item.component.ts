import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string; 
  @Input() loveIts: number=0;
  @Input() dontLove: number=0;
  @Input() created_at: object;

  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.loveIts ++;
  }

  dontLoveIt() {
    this.dontLove ++;
  }
}
