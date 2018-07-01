import { Component, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) { }

  onSelect(feature: string) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log('response: ', response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
