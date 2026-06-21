export type UserRole = 'manager' | 'employee';
export interface User {
  username: string;
  role: UserRole;
}
