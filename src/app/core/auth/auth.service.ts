import { computed, Service, signal } from '@angular/core';
import { User } from '../models/user.model';

const STORAGE_KEY = 'erp_auth_user';

const MOCK_USERS: { username: string; password: string; role: User['role'] }[] = [
  { username: 'admin', password: 'admin123', role: 'manager' },
  { username: 'employee', password: 'employee123', role: 'employee' },
];

@Service()
export class AuthService {
  private readonly _currentUser = signal<User | null>(this.restoreFromStorage());

  readonly currentUser = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => this._currentUser() !== null);
  readonly userRole = computed(() => this._currentUser()?.role ?? null);

  login(username: string, password: string): boolean {
    const isValid = MOCK_USERS.find((u) => u.username === username && u.password === password);

    if (!isValid) {
      return false;
    }

    const user: User = { username: isValid.username, role: isValid.role };
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
