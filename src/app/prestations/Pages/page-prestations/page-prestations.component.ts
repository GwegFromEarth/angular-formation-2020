import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection$: Observable<Prestation[]>;
  public entetes: string[];

  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    this.entetes = ["Type", "Client", "NbJours", "TjmHt", "Total HT", "Total TTC", "State"];
    this.collection$ = this.ps.collection;
    // this.ps.collection.subscribe(
    //   (datas) => {
    //     console.log(datas)
    //     this.collection = datas;
    //   }
    // );
  }

}
