import { User } from '../models/user.model';

/**
 * Model of the store for the authentication module
 */
export interface AuthState {
  user: User;
}
