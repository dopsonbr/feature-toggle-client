import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FeatureToggleService } from './feature-toggle-service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-feature-toggle',
  templateUrl: './feature-toggle.component.html',
  styleUrls: ['./feature-toggle.component.css']
})
export class FeatureToggleComponent implements OnInit {

  storeFeatureTogglesForm = new FormGroup({
    storeNumber: new FormControl(),
    environment: new FormControl(),
    productTeam: new FormControl()
  });
  storeFeatureToggles: Observable<string[]>;

  constructor(private featureToggleService: FeatureToggleService) { }

  ngOnInit() {

  }

  getStoreFeatureToggles() {
    this.storeFeatureToggles = this.featureToggleService.fetchStoreFeatureToggles(
        this.storeFeatureTogglesForm.value.storeNumber,
        this.storeFeatureTogglesForm.value.environment,
        this.storeFeatureTogglesForm.value.productTeam
      );
  }
}
