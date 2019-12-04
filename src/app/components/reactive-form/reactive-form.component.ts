import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public registrationForm = this.fb.group({
    userName: ['Waylon'],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      zipCode: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

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
