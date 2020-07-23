import { ContentComponent } from './shared/content/content.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'content', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
