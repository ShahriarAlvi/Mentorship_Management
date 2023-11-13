  import React from 'react'
  import HomeIcon from '@mui/icons-material/Home';
  import MailIcon from '@mui/icons-material/Mail';
  import BarChartIcon from '@mui/icons-material/BarChart';
  import DashboardIcon from '@mui/icons-material/Dashboard';
  import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
  import PermMediaIcon from '@mui/icons-material/PermMedia';
  
  export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home",
    },

    {
        title:"Mailbox",
        icon: <MailIcon />,
        link: "/mailbox"
    },

    {
        title: "Analytics",
        icon: <BarChartIcon />,
        link: "/analytics"
    },

    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
    },

    {
        title: "Friends",
        icon: <PeopleAltIcon />,
        link: "/friends"
    },

    {
        title: "Images",
        icon: <PermMediaIcon />,
        link: "images"
    }


  ];