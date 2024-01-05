import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from '../parkingInfo';
import { ActivatedRoute } from '@angular/router';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.component.html',
  styleUrls: ['./parking-detail.component.scss']
})
export class ParkingDetailComponent implements OnInit {

  parking: ParkingInfo|undefined;
  isLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private parkingService: ParkingService){}

  ngOnInit(): void {
    const parkingId = this.route.snapshot.paramMap.get('id');
    if(parkingId){
      this.parkingService.getParking(parkingId).subscribe(
        reponse => {
          this.parking = reponse;
          this.isLoaded = true;
        }
      )
    }
  }
}
