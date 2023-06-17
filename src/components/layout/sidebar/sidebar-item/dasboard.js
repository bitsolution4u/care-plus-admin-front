import { MdDashboard, MdOutlineSpeakerNotes } from 'react-icons/md';
import { RiSettings2Fill } from 'react-icons/ri';
import { BsArrowRightCircle } from 'react-icons/bs';

export const dashboardModule = [
  {
    icon: <MdOutlineSpeakerNotes />,
    module: 'Demo Component',
    link: '/demo-form',
    subModule: [],
  },
  {
    icon: <MdDashboard />,
    module: 'Dashboard',
    link: '/',
    subModule: [],
  },
  {
    icon: <RiSettings2Fill />,
    module: 'Configuration',
    link: '/',
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
