import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private ps: PrestationsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.collection$ = this.ps.collection;
    this.activatedRoute.data.subscribe((datas) => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    })
    this.label = "Ajouter une prestation";
    this.route = "add";
    this.externalLink = "https://www.google.fr/";
    this.headers = ["Type", "Client", "NbJours", "TjmHt", "Total HT", "Total TTC", "State"];
  }

  public changeState(item, event) {
    this.ps.updateState(item, event.target.value).subscribe((res: Prestation) => {
      item.state = res.state;
    });
  }

}
