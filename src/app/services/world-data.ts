import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldData {

  private apiUrl = 'https://api.worldbank.org/v2/country?format=json&per_page=300';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => {
        const countries = response[1]; 
        return countries.map((country: any) => ({
          id: country.id,
          iso2: country.iso2Code,
          name: country.name,
          capital: country.capitalCity,
          region: country.region.value,
          incomeLevel: country.incomeLevel.value,
          longitude: country.longitude,
          latitude: country.latitude
        }));
      })
    );
  }
}