import React, { useState } from "react";
import Logo from "../../assets/Index";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import {UilSignOutAlt} from '@iconscout/react-unicons'

const Sidebar = () => {
  const [selected, setSelected] = useState(0)
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        {SidebarData.map((items, i) => {
          return (
            <div className={selected == i? "menuItem active": "menuItem"}
             key={i}
             onClick={()=>setSelected(i)}
             >
              <div>
                <items.icon />
              </div>
              <span>{items.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
