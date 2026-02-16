import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private url = 'https://peticiones.online/api/series'

  constructor(private http: HttpClient) {}

  getSeries() {
    return this.http.get<any[]>(this.url)
  }

  createSerie(data: any) {
    return this.http.post(this.url, data)
  }
}
