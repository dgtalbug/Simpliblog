import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleListrComponent } from "./article-listr/article-listr.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ArticleComponent } from "./article/article.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: " ", component: ArticleListrComponent },
  { path: "articles", component: ArticleListrComponent },
  { path: "about", component: AboutComponent },
  { path: "404", component: NotFoundComponent },
  { path: "contact", component: ContactComponent },
  { path: ":key", component: ArticleComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
