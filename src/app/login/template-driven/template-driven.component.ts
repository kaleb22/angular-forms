import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, NgClass, AsyncPipe],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss',
})
export class TemplateDrivenComponent {
  private loginService = inject(LoginService);
  login$ = this.loginService.login$.pipe(tap(() => (this.showSpinner = false)));
  showSpinner = false;

  onSubmit(formData: NgForm) {
    this.showSpinner = true;
    const email = formData.form.value.email;
    const password = formData.form.value.password;

    this.loginService.triggerLogin({ email, password });
  }
}
