import { computed, Service, signal } from '@angular/core';
import { User } from '../models/user.model';

const STORAGE_KEY = 'erp_auth_user';

const MOCK_USERNAME = 'admin';
const MOCK_PASSWORD = 'admin123';

@Service()
export class AuthService {
   private readonly _currentUser = signal<User | null>(this.restoreFromStorage());

  readonly currentUser = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => this._currentUser() !== null);

   login(username: string, password: string): boolean {
    const isValid = username === MOCK_USERNAME && password === MOCK_PASSWORD;

    if (!isValid) {
      return false;
    }

    const user: User = { username };
    this._currentUser.set(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return true;
   }

  logout(): void {
    this._currentUser.set(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  private restoreFromStorage(): User | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  }
}
