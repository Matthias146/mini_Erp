// @vitest-environment jsdom
import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
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

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should not be authenticated initially', () => {
    expect(service.isAuthenticated()).toBe(false);
    expect(service.currentUser()).toBeNull();
  });

  it('should log in successfully with valid credentials', () => {
    const result = service.login('admin', 'admin123');

    expect(result).toBe(true);
    expect(service.isAuthenticated()).toBe(true);
    expect(service.currentUser()?.username).toBe('admin');
    expect(service.userRole()).toBe('manager');
  });

  it('should reject invalid credentials', () => {
    const result = service.login('admin', 'wrongPassword');

    expect(result).toBe(false);
    expect(service.isAuthenticated()).toBe(false);
  });

  it('should clear the user on logout', () => {
    service.login('admin', 'admin123');
    service.logout();

    expect(service.isAuthenticated()).toBe(false);
    expect(service.currentUser()).toBeNull();
  });

  it('should persist the logged-in user to localStorage', () => {
    service.login('admin', 'admin123');

    const stored = localStorage.getItem('erp_auth_user');
    expect(stored).toContain('admin');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
