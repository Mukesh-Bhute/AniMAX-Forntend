// authguard.guard.spec.ts

import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './authguard.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, AuthService, Router],
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if the user is logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    spyOn(console, 'log');

    const canActivate = guard.canActivate();

    expect(canActivate).toBeTruthy();
    expect(console.log).toHaveBeenCalledWith('User is logged in');
  });

  it('should navigate to login route if the user is not logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    spyOn(router, 'navigate');

    const canActivate = guard.canActivate();

    expect(canActivate).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
