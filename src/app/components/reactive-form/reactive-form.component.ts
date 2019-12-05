import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../../shared/user-name.validator';
import { PasswordValidator } from '../../shared/password.validator';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public registrationForm: formGroup;

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        zipCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, {validator: PasswordValidator});

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');

        if(checkedValue){
          email.setValidators(Validators.required);
        }
        else{
          email.clearValidators();
        }

        email.updateValueAndValidity();
      });
  }

  loadApiData(){
    this.registrationForm.setValue({
      userName: 'Waylon',
      email: '',
      subscribe: '',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Scottsdale',
        state: 'AZ',
        zipCode: '85254'
      },
      alternateEmails: []
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

    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  }
}
