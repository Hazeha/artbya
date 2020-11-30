import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from "./routes/gallery/gallery.component";
import { AboutComponent } from "./routes/about/about.component";
import { NotFoundComponent } from "./routes/not-found/not-found.component";

const routes: Routes = [
  { path: '',   component: GalleryComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
