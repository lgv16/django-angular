import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CamaService } from '../cama.service';
import { Cama } from '../cama';

@Component({
  selector: 'camas-list',
  templateUrl: './camas-list.component.html',
  styleUrls: ['./camas-list.component.css']
})
export class CamasListComponent implements OnInit {

  camas: Observable<Cama[]>;

  constructor(private camaService: CamaService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteCamas() {
    this.camaService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.camas = this.camaService.getCamasList();
  }

}
