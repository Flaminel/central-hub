import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  user: any;
  isAuthenticated = false;
  constructor(@Inject(DOCUMENT) public document: Document, public authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      this.user = user;
    });
    this.authService.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  public signIn(): void {
    this.authService.loginWithRedirect();
  }

  public signOut(): void {
    this.authService.logout({ logoutParams: { returnTo: document.location.origin } });
  }
}
