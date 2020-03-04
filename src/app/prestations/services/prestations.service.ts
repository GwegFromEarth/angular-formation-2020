import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Prestation } from 'src/app/shared/models/prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection$: Observable<Prestation[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Prestation[]>(`${environment.urlApi}prestations`).pipe(
      // map(tab => tab.map(objJson => new Prestation(objJson)))
      map((tab) => {
        return tab.map((objJson) => {
          return new Prestation(objJson);
        })
      })
    );
  }

  // Get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollection$;
  }

  // Set collection
  public set collection(col: Observable<Prestation[]>) {
    this.pCollection$ = col;
  }

  // Add item in collection

  // Update item in collection

  // Delete item in collection

  // Get item by id from collection

}
