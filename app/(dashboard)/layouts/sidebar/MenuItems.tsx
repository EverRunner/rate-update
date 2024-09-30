import {
  IconLayoutDashboard,
  IconAddressBook,
  IconCheckupList,
  IconEye,
  IconLogout2
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard'
  },

  {
    id: uniqueId(),
    title: 'Contacts',
    icon: IconAddressBook,
    href: '/contact'
  },
  {
    id: uniqueId(),
    title: 'Email Tracker',
    icon: IconCheckupList,
    href: '/tracker'
  },

  {
    id: uniqueId(),
    title: 'Email Preview',
    icon: IconEye,
    href: '/preview'
  },

  // {
  //   id: uniqueId(),
  //   title: "Settings",
  //   icon: IconSettings,
  //   href: "/setting",
  // },

  {
    id: uniqueId(),
    title: 'Logout',
    icon: IconLogout2,
    href: '/authentication/login'
  }
];

export default Menuitems;
