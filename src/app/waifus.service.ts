import { Injectable } from '@angular/core';
import { ApiResponse } from './interfaces/api-response';
import { Tags } from './interfaces/tags';

@Injectable({
  providedIn: 'root'
})
export class WaifusService {
  url = 'https://api.nekosia.cat/api/v1';

  constructor() { }

  async getAllTags(): Promise<Tags | null> {
    try {
      const response = await fetch(`${this.url}/tags`);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudieron obtener las tags`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error al obtener las tags:', error);
      return null; // Retorna `null` en caso de error
    }
  }

  async getImagePerTag(tag: string): Promise<ApiResponse | null> {
    try {
      const response = await fetch(`${this.url}/images/${tag}`);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudo obtener la imagen para la tag "${tag}"`);
      }

      return await response.json();
    } catch (error) {
      alert('The tag is not avalible try another');
      return null; // Retorna `null` en caso de error
    }
  }
}
