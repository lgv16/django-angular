import { Component, OnInit } from '@angular/core';

import { Cama } from '../cama';
import { CamaService } from '../cama.service';

@Component({
  selector: 'create-cama',
  templateUrl: './create-cama.component.html',
  styleUrls: ['./create-cama.component.css']
})
export class CreateCamaComponent implements OnInit {

  cama: Cama = new Cama();
  submitted = false;

  constructor(private camaService: CamaService) { }

  ngOnInit() {
  }

  newCama(): void {
    this.submitted = false;
    this.cama = new Cama();
  }
 
  save() {
    this.camaService.createCama(this.cama)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.cama = new Cama();
  }
 
  onSubmit() {
    this.save();
  }

}

