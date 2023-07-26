import {Component} from '@angular/core';
import {Offer} from "../../interface/Offer";
import offersData from "../../../assets/data/offers.json";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html'
})
export class OffersComponent{
  protected offers: Offer[] = offersData;
}
