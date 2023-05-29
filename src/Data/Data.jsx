// Sidebars Imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import img3 from "../assets/imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Card Data
export const CardData = [
  {
    id: 2,
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    id: 3,
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #fdc0c7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    id: 4,
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #f8d49a 0%, #ffca71 100%)",
      boxShadow: "0px 10px 20px 0px #f9d59b",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const UpdateData = [
  {
    img: img1,
    name: "Meet Rakholiya",
    noti: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    time: "25 sec ago",
  },
  {
    img: img2,
    name: "Meet Rakholiya",
    noti: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    time: "30 min ago",
  },
  {
    img: img3,
    name: "Meet Rakholiya",
    noti: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    time: "2 hours ago",
  },
];
