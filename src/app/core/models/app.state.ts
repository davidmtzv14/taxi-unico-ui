import { AuthState } from '@app/auth/state/auth.state';

/**
 * Model for our application state in the store
 */
export interface AppState {
  auth: AuthState;
}
