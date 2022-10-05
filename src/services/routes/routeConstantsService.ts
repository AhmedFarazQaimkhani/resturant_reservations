// Types
import { AppRouterProps } from './types';

export const routeConstantsService = (() => {
  /**
   * NOTE: Declare all routes which doesn't require authentication over here.
   */
  const unAuthenticatedRoutes: Record<string, AppRouterProps> = {
    // Just for now I have added it here when we will implement authentication process will move it to authenticated routes
    reservation: {
      key: 'reservation',
      title: 'Reservation',
      path: '/',
    },
  };

  /**
   * NOTE: Declare all routes which require authentication over here.
   */
  // const authenticatedRoutes: Record<string, AppRouterProps> = {};

  /**
   * @Public_Methods
   */
  return {
    // authenticatedRoutes,
    unAuthenticatedRoutes,
  };
})();
