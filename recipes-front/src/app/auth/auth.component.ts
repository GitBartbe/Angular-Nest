import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  authForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService) {}
  toggleLoginMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit() {
    this.authService.logIn(this.authForm.value);
  }

  ngOnInit(): void {}
}
