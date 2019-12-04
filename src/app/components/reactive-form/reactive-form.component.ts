import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public registrationForm = new FormGroup({
    userName: new FormControl('Waylon'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  loadApiData(){
    this.registrationForm.setValue({
      userName: 'Waylon',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Scottsdale',
        state: 'AZ',
        zipCode: '85254'
      }
    });
  }

  loadPartialAidData(){
    this.registrationForm.patchValue({
      userName: 'Who',
      password: 'test',
      confirmPassword: 'test'
    });
  }
}
