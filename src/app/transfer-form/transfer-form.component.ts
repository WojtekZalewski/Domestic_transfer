import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidation } from './../custom-validation';


@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit {
  transferForm: FormGroup;
  show: boolean = false;
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
    this.transferForm = new FormGroup({
      accountNumber: new FormControl('', { 
        validators: [ 
          Validators.required, 
          Validators.minLength(26),
          Validators.maxLength(26),
          CustomValidation.onlyDigits
        ]
      }),
      ricipientsName: new FormControl('', { 
        validators: [
          Validators.required, 
          Validators.minLength(3),
          CustomValidation.onlyLetters
        ]
      }),
      ricipientsAddress: new FormControl('', {
        validators: [
          Validators.required, 
          Validators.minLength(5)
        ]
      }),
      transferAmount: new FormControl('', { 
        validators: [
          Validators.required,
          Validators.minLength(1)
        ]
      }),
      transferTitle: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          CustomValidation.wordsLimit(10)
        ]
      }),
      transferSender: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2)
        ]
      })
    });
  }
  onSubmit() {
    this.submitted = !this.submitted;
  }
  backForm() {
    this.submitted = !this.submitted;
    this.transferForm.reset();
  }
}