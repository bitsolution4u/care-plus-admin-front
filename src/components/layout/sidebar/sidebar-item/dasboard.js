export const dashboardModule = [
  {
    icon: 'tabler:chart-pie-2',
    module: 'Dashboard',
    link: '/dashboard',
  },
  {
    icon: 'tabler:chart-pie-2',
    module: 'Configuration',
    subModule: [
      {
        icon: 'tabler:chart-pie-2',
        module: 'Shop Type',
        link: '/shop-type',
      },
      {
        icon: 'tabler:chart-pie-2',
        module: 'Service Type',
        link: '/service-type',
      },
    ],
  },
];
