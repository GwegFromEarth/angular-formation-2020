import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';

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
  public addPrestation(item: any) {
    return this.http.post<Prestation>(`${environment.urlApi}prestations`, item);
  }

  // Update item in collection
  public updateState(prestation: Prestation, state: State): Observable<Prestation> {
    let presta = new Prestation(prestation);
    presta.state = state;
    return this.updatePrestation(presta);
  }

  public updatePrestation(prestation: Prestation): Observable<Prestation> {
    return this.http.patch<Prestation>(`${environment.urlApi}prestations/${prestation.id}`, prestation);
  }

  // Delete item in collection
  public deletePrestation(prestation: Prestation): Observable<Prestation> {
    return this.http.delete<Prestation>(`${environment.urlApi}prestations/${prestation.id}`);
  }

  // Get item by id from collection

}
