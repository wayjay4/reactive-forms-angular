import { AbstractControl, ValidatorFn } from '@angular/forms';

//export function forbiddonNameValidator(control: AbstractControl): {[key: string]: any} | null {
  //const forbidden = /admin/.test(control.value);
  //return forbidden ? { 'forbiddenName': {value: control.value} } : null;
//}

// converted above function to a factory function
export function forbiddonNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { 'forbiddenName': {value: control.value} } : null;
  };
}
