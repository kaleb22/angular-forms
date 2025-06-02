import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, NgClass, AsyncPipe],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss',
})
export class TemplateDrivenComponent {
  private loginService = inject(LoginService);
  login$ = this.loginService.login$;

  onSubmit(formData: NgForm) {
    const email = formData.form.value.email;
    const password = formData.form.value.password;

    this.loginService.triggerLogin({ email, password });
    formData.form.reset();
  }
}
