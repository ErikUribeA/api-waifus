import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaifusService } from './waifus.service';
import { Tags } from './interfaces/tags';
import { WaifuImgComponent } from './waifu-img/waifu-img.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, WaifuImgComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  tags: Tags | null = null;
  selectedValue: string | null = null
  
  constructor(private waifusService: WaifusService) { }

  ngOnInit() {
    this.loadTags();
  }

  async loadTags() {
    try {
      const response = await this.waifusService.getAllTags()
      if (response) {
        this.tags = response
      }
    } catch (error) {
      console.log(`Errro loading the tags ${error} `)
    }
  }

  onTagChange(event: Event) {
    this.selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected tag:', this.selectedValue);
  }
}
