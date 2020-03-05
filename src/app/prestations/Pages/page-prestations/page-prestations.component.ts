import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection$: Observable<Prestation[]>;
  public headers: string[];
  public states = Object.values(State);
  public title: string;
  public subtitle: string;
  public label: string;
  public route: string;
  public externalLink: string;

  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    this.headers = ["Type", "Client", "NbJours", "TjmHt", "Total HT", "Total TTC", "State"];
    this.collection$ = this.ps.collection;
    this.title = "Prestations";
    this.subtitle = "Toutes les prestations";
    this.label = "Ajouter une prestation";
    this.route = "add";
    this.externalLink = "https://www.google.fr/";
  }

  public changeState(item, event) {
    this.ps.updateState(item, event.target.value).subscribe((res: Prestation) => {
      item.state = res.state;
    });
  }

}
