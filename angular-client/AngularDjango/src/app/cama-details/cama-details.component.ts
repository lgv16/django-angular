import { Component, OnInit, Input } from '@angular/core';
import { CamaService } from '../cama.service';
import { Cama } from '../cama';

import { CamasListComponent } from '../camas-list/camas-list.component';



@Component({
  selector: 'cama-details',
  templateUrl: './cama-details.component.html',
  styleUrls: ['./cama-details.component.css']
})
export class CamaDetailsComponent implements OnInit {

  @Input() cama: Cama;

  constructor(private camaService: CamaService, private listComponent: CamasListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.camaService.updateCama(this.cama.id,
      { name: this.cama.name, age: this.cama.age, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.cama = data as Cama;
        },
        error => console.log(error));
  }
 
  deleteCama() {
    this.camaService.deleteCama(this.cama.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
