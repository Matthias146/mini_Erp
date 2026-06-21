// @vitest-environment jsdom
import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';
import { describe, it, expect, beforeEach } from 'vitest';
import { roleGuard } from './role-guard';
import { AuthService } from './auth.service';

const store = new Map<string, string>();
globalThis.localStorage = {
  getItem: (key: string) => store.get(key) ?? null,
  setItem: (key: string, value: string) => void store.set(key, value),
  removeItem: (key: string) => void store.delete(key),
  clear: () => store.clear(),
  key: (index: number) => Array.from(store.keys())[index] ?? null,
  length: store.size,
} as Storage;

describe('roleGuard', () => {
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: { navigate: vi.fn() } }],
    });
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should allow access when the role matches', () => {
    authService.login('admin', 'admin123');

    const guard = roleGuard(['manager']);
    const result = TestBed.runInInjectionContext(() => guard({} as any, {} as any));

    expect(result).toBe(true);
  });

  it('should redirect to dashboard when the role does not match', () => {
    authService.login('lager', 'lager123');

    const guard = roleGuard(['manager']);
    const result = TestBed.runInInjectionContext(() => guard({} as any, {} as any));

    expect(result).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});
