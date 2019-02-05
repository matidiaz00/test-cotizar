import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forex } from '../interfaces/forex';
import { ApiEndPoint } from '../interfaces/api-end-point';

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  constructor(private http: HttpClient) { }

  getForex() {
    return this.http.get<Forex>(
      this.setEndPoint()
    )
  }

  setEndPoint() {
    const apiEndPoint: ApiEndPoint = {
      api: "http://data.fixer.io/api/",
      method: "latest",
      access_key: "3ec92399c67ee7fa9ea5233c74261295",
      symbols: "USD"
    };
    const endPoint = `${apiEndPoint.api+apiEndPoint.method}?access_key=${apiEndPoint.access_key}&symbols=${apiEndPoint.symbols}`;
    return endPoint;
  }

}
