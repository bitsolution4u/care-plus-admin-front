export const dashboardModule = [
  {
    icon: 'tabler:chart-pie-2',
    module: 'Dashboard',
    link: '/dashboard',
    subModule: [],
  },
  {
    icon: 'tabler:chart-pie-2',
    module: 'Configuration',
    subModule: [
      {
        icon: 'tabler:chart-pie-2',
        subModuleName: 'Shop Type',
        link: '/shop-type',
        innerSubModule: [],
      },
      {
        icon: 'tabler:chart-pie-2',
        subModuleName: 'Service Type',
        link: '/service-type',
        innerSubModule: [],
      },
    ],
  },
];
