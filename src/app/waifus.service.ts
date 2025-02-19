import { Injectable } from '@angular/core';
import { ApiResponse } from './interfaces/api-response';
import { Tags } from './interfaces/tags';
import Swal from 'sweetalert2'

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
      Swal.fire({
        title: "Error",
        text: "This tag is not available",
        imageUrl: "/images/nope-cute.gif",
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: "Custom image",
        background: "#222", 
        color: "#fff", 
        confirmButtonText: "Try Again",
        customClass: {
          popup: "custom-popup", // Aplica estilos personalizados
          confirmButton: "custom-button"
        },
      });
      return null; // Retorna `null` en caso de error
    }
  }
}
