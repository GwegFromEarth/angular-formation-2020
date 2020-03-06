import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  public title: string;
  public subtitle: string;

  constructor(
    private ps: PrestationsService,
    private router: Router
    , private activatedRoute: ActivatedRoute // Pour rediriger en relatif
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((datas) => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    })
  }

  public addItem(item: any) {
    this.ps.addPrestation(item).subscribe((res) => {
      this.router.navigate(['prestations']);
      // this.router.navigate(['../'], {relativeTo: this.activatedRoute}); // Pour passer de .../prestations/add à .../prestations
    });
  }
}
