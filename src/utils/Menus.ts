import {
  FiActivity,
  FiChevronsUp,
  FiHeart,
  FiHome,
  FiMapPin,
  FiRotateCcw,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiTruck,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { BsCreditCard } from "react-icons/bs";
import note from '../assets/note.png'
import { ImgHTMLAttributes } from "react";
import { ImgProps } from "@chakra-ui/react";

interface MenuItemProps {
  name: string;
  path: string;
  icon: ImgProps;
}

const Menus = [
  {
    name: "Dashboard",
    path: "/",
    icon: note,
  },  
  {
    name: "Meus registros",
    path: "/myRegisters",
    icon: FiActivity,
  },
  
];

export default Menus;
