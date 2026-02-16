import { Component } from '@angular/core';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  series: any[] = []

  constructor (private listado: SeriesService) {}

  ngOnInit() {
    this.listado.getSeries().subscribe(res => {
      this.series = res
    })
  }
}
