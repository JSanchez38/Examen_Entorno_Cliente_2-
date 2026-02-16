import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class NewComponent {
  
  constructor(private service: SeriesService) {}


  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    channel: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required])
  })


  onSubmit() {
    if (this.form.valid) {
      this.service.createSerie(this.form.value).subscribe(res => {
      console.log('Serie creada con exito', this.form.value)
      })
    } else {
      console.log('Formulario incorrecto')
    }

  }
}
