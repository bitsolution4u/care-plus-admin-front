import React, { useState } from 'react';
import { dashboardModule } from './sidebar-item/dasboard';
import { productModule } from './sidebar-item/product';
const useSidebar = () => {
  const [sidebarItems, setSideBarItems] = useState([
    ...dashboardModule,
    ...productModule,
  ]);
  return { sidebarItems };
};

export default useSidebar;
