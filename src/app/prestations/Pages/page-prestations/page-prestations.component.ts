import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable, BehaviorSubject } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Import de l'icône poubelle depuis FontAwesome

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  // Observable est un observable froid qui n'a pas besoin d'être initialisé
  // public collection$: Observable<Prestation[]>;
  // ou
  // BehaviorSubject est un Observable chaud, il doit forcément être initialisé avec un flux de données donc on lui met null
  public collection$ = new BehaviorSubject<Prestation[]>(null);

  public headers: string[];
  public states = Object.values(State);
  public title: string;
  public subtitle: string;
  public label: string;
  public route: string;
  public externalLink: string;
  public faTrashAlt = faTrashAlt;

  constructor(private ps: PrestationsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Pour l'observable froid :
    // On initialise
    // this.collection$ = this.ps.collection;
    // ou
    // Pour l'observable chaud :
    // On modifie le flux de données avec la liste des prestations
    this.ps.collection.subscribe((datas) => {
      this.collection$.next(datas);
    });

    this.activatedRoute.data.subscribe((datas) => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    })
    this.label = "Ajouter une prestation";
    this.route = "add";
    this.externalLink = "https://www.google.fr/";
    this.headers = ["Type", "Client", "NbJours", "TjmHt", "Total HT", "Total TTC", "State", "Delete"];
  }

  public changeState(item, event) {
    this.ps.updateState(item, event.target.value).subscribe((res: Prestation) => {
      item.state = res.state;
    });
  }

  public delete(item: Prestation) {
    this.ps.deletePrestation(item).subscribe((res: Prestation) => {
      // On remodifie le flux de données maintenant que la prestation est supprimée
      this.ps.collection.subscribe((datas) => {
        this.collection$.next(datas);
      });
    });
  }
}
