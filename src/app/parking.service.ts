import { Injectable } from '@angular/core';
import { ParkingInfo } from './parkingInfo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient: HttpClient) { }

  getParkings(): Observable<ParkingInfo[]> {
    return this.httpClient.get<ParkingInfo[]>('http://localhost:8080/api/parkings');
  }
}
