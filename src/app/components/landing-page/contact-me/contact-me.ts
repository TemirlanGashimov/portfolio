import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf} from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TranslatePipe, RouterLink],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {

  status: 'success' | 'error' | null = null;

  fb = inject(FormBuilder);

  form = this.fb.group ({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue],
    
  });

  submit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.status = 'error';
      return;
    }

    this.status = 'success';

    this.form.reset();

    setTimeout(() => {
      this.status = null;
    }, 3000);
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }

  get privacy() {
    return this.form.get('privacy');
  }
}
