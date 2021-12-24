import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ),
      ],
    ],
    password: ['', Validators.required],
  });

  get firstName() {
    return this.form.get('firstName') as FormControl;
  }

  get lastName() {
    return this.form.get('lastName') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }
}
