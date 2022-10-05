// Packages
import { ElementType, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

// Types
import { AppRouterProps } from '../services/routes/types';

// Services
import { routeUtilService } from '../services/routes/routeUtilService';

const AppRoutes = () => {
  /**
   *
   * @Methods
   */
  const renderRoutes = (routes: AppRouterProps[]) => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    if (!routes?.length) return <></>;
    return routes.map((route: AppRouterProps) => {
      const Component = route.component as ElementType;
      //   if (!route.isProtected) {
      return (
        <Route
          key={route.key}
          index={route.index}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...(!route.index ? { path: route.path } : {})}
          element={<Component />}
        >
          {renderRoutes(route.childrenRoutes as AppRouterProps[])}
        </Route>
      );
      //   } else {
      //     return; // Protected Routes will appear here
      //   }
    });
  };

  /**
   * @Variables
   */
  const appRoutes = useMemo(() => {
    return <Routes>{renderRoutes(routeUtilService.applicationRoutes)}</Routes>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * @Render
   */
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{appRoutes}</>;
};

export default AppRoutes;
