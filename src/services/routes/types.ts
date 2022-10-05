// Packages

import { ElementType } from 'react';

export interface AppRouterProps {
  key: string;
  title: string;
  path: string;
  isProtected?: boolean;
  component?: ElementType;
  childrenRoutes?: AppRouterProps[];
  index?: boolean;
}
