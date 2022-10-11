// Components
import { Reservations } from '../../pages/Reservations';

// Services
import { routeConstantsService } from './routeConstantsService';

// Types
import { AppRouterProps } from './types';

export const routeUtilService = (() => {
  /**
   * NOTE: All un-authenticated routes will be listed down here.
   */
  const unAuthenticatedRoutes: AppRouterProps[] = [
    {
      ...routeConstantsService.unAuthenticatedRoutes.reservation,
      component: Reservations,
    },
  ];

  /**
   * NOTE: All authenticated routes will be listed down here.
   */
  // const authenticatedRoutes: AppRouterProps[] = [];

  // merged route Array for all routes
  const applicationRoutes: AppRouterProps[] = [
    ...unAuthenticatedRoutes,
    // ...authenticatedRoutes,
  ];

  /**
   * @Public_Methods
   */
  return {
    applicationRoutes,
  };
})();
