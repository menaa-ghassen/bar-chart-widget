import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BarChartService {
  private api = 'http://localhost:8088';

  constructor(private httpClient: HttpClient) { }

  getSales(libName: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api + '/sales/' + libName);
  }
}

