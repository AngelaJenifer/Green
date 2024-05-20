import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal
} from "@iconscout/react-unicons";
import img1 from '../Components/Images/img1.jpg';
import img2 from '../Components/Images/img2.jpg';
import img3 from '../Components/Images/img3.jpg';

//sidebar Data
export const SidebarData=[
    {
     icon: UilEstate,
     heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
        path: "/orders"
       },
       {
        icon: UilUsersAlt,
        heading: "Customers"
       },
       {
        icon: UilPackage,
        heading: "Products"
       },
       {
        icon: UilChart,
        heading: "Analytics"
       }
];

export const CardsData = [
    {
        title:"Sales",
        color: {
            backGround: "linear-gradient(315deg, #d3d3d3 0%, #2bc96d 74%)",
            
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data : [31, 40, 28, 51, 42, 109, 100]
            }
        ]

    },

    {
        title:"Revenue",
        color: {
            backGround: "linear-gradient(315deg, #ffffff 0%, #82bc23 74%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data : [10, 100, 50, 70, 80, 30, 40]
            }
        ]

    },

    {
        title:"Expenses",
        color: {
            backGround: "linear-gradient(315deg, #ffffff 0%, #82bc23 74%)",
            boxShadow: "0px 10px 20px 0px #F9D598",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data : [10, 25, 15, 30, 12, 15, 20]
            }
        ]

    },

    
]

// Recent Update Card Data
export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];