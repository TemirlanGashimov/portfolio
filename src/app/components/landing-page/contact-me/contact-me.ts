import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf} from '@angular/common';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {

  name: string = '';
  email: string = '';
  message: string = '';
  privacyAccepted: boolean = false;

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;

    if (!this.isFormValid()) {
      return;
    }
      console.log('Form valid ✅');

      this.name = '';
      this.email = '';
      this.message = '';
      this.privacyAccepted = false;
      this.submitted = false;
    }
  

  isFormValid(): boolean {
    return (
      this.name.trim() !== '' &&
      this.email.trim() !== '' &&
      this.message.trim() !== '' &&
      this.privacyAccepted
    );
  }

  isNameInvalid() {
    return this.submitted && this.name.trim() === '';
  }

  isEmailInvalid() {
    return this.submitted && this.email.trim() === '';
  }

  isMessageInvalid() {
    return this.submitted && this.message.trim() === '';
  }

  isCheckboxInvalid() {
    return this.submitted && !this.privacyAccepted;
  }
}
