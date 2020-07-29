import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void { }

  readMore() {
    window.open(this.article.url, "_blank");
  }
}
