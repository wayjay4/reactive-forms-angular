import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['test'],
    confirmPassword: ['test'],
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

  onSubmit(){
    // TODO: use EventEmitter with form value
    console.warn(this.registrationForm.value);
  }
}
