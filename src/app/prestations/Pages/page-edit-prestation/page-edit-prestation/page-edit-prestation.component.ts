import { Component, OnInit } from '@angular/core';
import { PrestationsService } from 'src/app/prestations/services/prestations.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public item$: Observable<Prestation>;
  public id: number;

  constructor(
    private ps: PrestationsService,
    private activatedRoute: ActivatedRoute // Pour rediriger en relatif
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((datas) => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    });

    this.activatedRoute.paramMap.subscribe((params) => {
      this.item$ = this.ps.getItemById(params.get('id'));
    });

    this.item$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = +params.get('id');
        return this.ps.getItemById(params.get('id'));
      })
    );
  }

  public editItem(prestation: Prestation) {
    prestation.id = this.id;
  }
}
