import { Component, OnInit } from '@angular/core';

import { Cama } from '../cama';
import { CamaService } from '../cama.service';

@Component({
  selector: 'search-camas',
  templateUrl: './search-camas.component.html',
  styleUrls: ['./search-camas.component.css']
})
export class SearchCamasComponent implements OnInit {

  codigo: string;
  camas: Cama[];

  constructor(private dataService: CamaService) { }

  ngOnInit() {
    this.codigo = "cero";
  }

  private searchCamas() {
    this.camas = [];
    this.dataService.getCamasByCodigo(this.codigo)
      .subscribe(camas => this.camas = camas);
  }
 
  onSubmit() {
    this.searchCamas();
  }

}
