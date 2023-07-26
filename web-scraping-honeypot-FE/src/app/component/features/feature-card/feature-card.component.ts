import {Component, Input} from '@angular/core';
import {Feature} from "../../../interface/Feature";

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
})
export class FeatureCardComponent {
  @Input() feature!: Feature;

}
