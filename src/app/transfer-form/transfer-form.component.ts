import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
          Validators.minLength(2),
        ]
      }),
      ricipientsName: new FormControl('', { 
        validators: [
          Validators.required, 
          Validators.minLength(2)
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