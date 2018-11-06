import { AuthActions } from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  user: {
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName')
  }
};

/**
 * Auths reducer
 * @param [state] Auth state
 * @param action Auth actions
 * @returns reducer Auth reducer
 */
export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    default:
      return state;
  }
}
