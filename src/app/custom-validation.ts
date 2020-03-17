import { FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidation {
    static onlyDigits(formControl: FormControl): ValidationErrors {
        return /[0-9]/.test(formControl.value) ? null : { onlyDigits: true};
      }
    static wordsLimit(limit: number): ValidatorFn { 
        return (formControl: FormControl) => {
          const current = formControl.value.split(' ').length;
            return current <= limit ? null : {
              wordsLimit: { limit: limit, current: current }
            };
        }
    }
    static onlyLetters(formControl: FormControl:
      ): ValidationErrors {
        return /[a-zA-Z]/.test(formControl.value) ? null : { onlyLetters: true};
      }
}
