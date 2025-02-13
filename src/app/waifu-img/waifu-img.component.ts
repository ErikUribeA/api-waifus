import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { WaifusService } from '../waifus.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-waifu-img',
  imports: [CommonModule],
  templateUrl: './waifu-img.component.html',
  styleUrl: './waifu-img.component.sass',
})
export class WaifuImgComponent implements OnInit {

  @Input() tag: string | null = 'girl'; // Recibe el tag como prop

  waifus: ApiResponse | null = null;
  tooltipVisible: boolean = false;
  tooltipText: string = '';
  tooltipX: number = 0;
  tooltipY: number = 0;

  constructor(private waifusService: WaifusService) { }

  ngOnInit() {
    this.loadImages();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tag'] && this.tag) {
      this.loadImages();
    }
  }

  async loadImages() {
    try {
      if (!this.tag) return; // Evita llamadas innecesarias
      const response = await this.waifusService.getImagePerTag(this.tag);
      if (response) {
        this.waifus = response;
      }
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
  }

  showTooltip(event: MouseEvent, text: string) {
    this.tooltipText = text;
    this.tooltipX = event.clientX + 10;
    this.tooltipY = event.clientY + 10;
    this.tooltipVisible = true;
  }

  hideTooltip() {
    this.tooltipVisible = false;
  }
}
