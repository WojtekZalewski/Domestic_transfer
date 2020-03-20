import { FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidation {
    static onlyDigits(formControl: FormControl): ValidationErrors {
        return /[0-9]/.test(formControl.value) ? null : { onlyDigits: true};
      }
    static onlyLetters(formControl: FormControl): ValidationErrors {
        return /[a-zA-Z]/.test(formControl.value) ? null : { onlyLetters: true};
      }
}
