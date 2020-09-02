import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.sass'],
})
export class NewsFormComponent implements OnInit {
  newsForm: FormGroup;

  constructor() {
    this.newsForm = new FormGroup({

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
    });
  }

  submit(moduleWindow) {
    if (this.newsForm.invalid) {
      this.markEmailTouchedForValidate();
    }
    else {
      this.newsForm.reset();
      moduleWindow.open();
    }
  }

  get email() { return this.newsForm.get('email'); }

  public markEmailTouchedForValidate () {
    this.email.markAsTouched({onlySelf: true});
  }

  ngOnInit(): void {
  }

}
