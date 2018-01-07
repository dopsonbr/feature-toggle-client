import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-feature-toggle',
  templateUrl: './feature-toggle.component.html',
  styleUrls: ['./feature-toggle.component.css']
})
export class FeatureToggleComponent implements OnInit {

  storeFeatureTogglesForm = new FormGroup({
    storeNumber: new FormControl(),
    environment: new FormControl(),
    product: new FormControl()
  });

  constructor() { }

  ngOnInit() {

  }

  getStoreFeatureToggles() {
  }
}
