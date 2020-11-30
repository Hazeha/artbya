import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { HeaderComponent } from './_components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './_components/footer/footer.component';
import { AboutComponent } from './routes/about/about.component';
import { GalleryComponent } from './routes/gallery/gallery.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import {MatCardModule} from "@angular/material/card";
import { ProductComponent } from './routes/gallery/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent,
    NotFoundComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
