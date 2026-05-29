import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactMe } from './contact-me';
import { TranslateModule } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';

describe('ContactMe', () => {
  let component: ContactMe;
  let fixture: ComponentFixture<ContactMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactMe, TranslateModule.forRoot()],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactMe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate email pattern correctly', () => {
    const emailControl = component.email;
    
    // Invalid emails
    const invalidEmails = ['invalid-email', 'abc@def', 'abc@def.', 'abc.def', '@def.com'];
    invalidEmails.forEach(email => {
      emailControl?.setValue(email);
      expect(emailControl?.valid).toBeFalsy();
    });

    // Valid emails
    const validEmails = ['test@example.com', 'user.name@domain.de', 'a@b.co', 'first-last@sub.domain.org'];
    validEmails.forEach(email => {
      emailControl?.setValue(email);
      expect(emailControl?.valid).toBeTruthy();
    });
  });

  it('should set error status and not submit if email is invalid', () => {
    component.form.setValue({
      name: 'John Doe',
      email: 'invalid@email',
      message: 'Hello World',
      privacy: true
    });

    expect(component.form.invalid).toBeTruthy();
    component.submit();
    expect(component.status).toBe('error');
  });

  it('should set success status on valid form submit', () => {
    component.form.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello World',
      privacy: true
    });

    expect(component.form.valid).toBeTruthy();
    component.submit();
    expect(component.status).toBe('success');
  });
});
