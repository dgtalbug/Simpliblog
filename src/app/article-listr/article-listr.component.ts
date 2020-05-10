import { Component, OnInit } from "@angular/core";
import { Article } from "../article";
import { ARTICLES } from "../mock-articles";
import { ArticleService } from "../article.service";
import { Title } from "@angular/platform-browser";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-article-listr",
  templateUrl: "./article-listr.component.html",
  styleUrls: ["./article-listr.component.css"],
})
export class ArticleListrComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.sharedService.blogTitle}`);
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }
}
