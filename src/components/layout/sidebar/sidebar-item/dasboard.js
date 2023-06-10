import { MdDashboard } from 'react-icons/md';
import { RiSettings2Fill } from 'react-icons/ri';
import { BsArrowRightCircle } from 'react-icons/bs';

export const dashboardModule = [
  {
    icon: <MdDashboard />,
    module: 'Dashboard',
    link: '/dashboard',
    subModule: [],
  },
  {
    icon: <RiSettings2Fill />,
    module: 'Configuration',
    subModule: [
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Shop Type',
        link: '/shop-type',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Service Type',
        link: '/service-type',
        innerSubModule: [],
      },
    ],
  },
];
