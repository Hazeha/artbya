import { Component, OnInit } from '@angular/core';
import { CollectionsService } from "../../_services/collections.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [CollectionsService]
})
export class GalleryComponent implements OnInit {
  collections;

  constructor( collectionsService: CollectionsService) {
    this.collections = collectionsService.getCollections();
    console.log(this.collections);
  }

  ngOnInit(): void {
  }

}
