import {Component} from '@angular/core';
import {Feature} from "../../interface/Feature";
import featureData from "../../../assets/data/features.json";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent{
  protected features: Feature[] = featureData;
}
