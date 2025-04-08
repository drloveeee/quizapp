import React, { useState } from "react";
import { FileText, BarChart2, Users, Award, LogOut, ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { icon: <FileText size={18} />, label: "Staff" },
    { icon: <FileText size={18} />, label: "Dashboard" },
    { icon: <FileText size={18} />, label: "Exams" },
    { icon: <BarChart2 size={18} />, label: "Statistics" },
    { icon: <Users size={18} />, label: "Users" },
    { icon: <Award size={18} />, label: "XChallenge" },
    { icon: <LogOut size={18} />, label: "Logout" },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-48"
      } bg-white shadow-md z-10 transition-all duration-300`}
    >
      {/* Top header strip */}
      <div className="h-12 bg-[#00bcd4] flex justify-end items-center px-2">
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Rotated diamond logo placeholder */}
      <div className="bg-[#f5f5f5] h-24 flex items-center justify-center">
        <div className="w-10 h-10 bg-gray-300 transform rotate-45"></div>
      </div>

      {/* Navigation */}
      <nav className="py-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            <div className="mr-3">{item.icon}</div>
            {!collapsed && <span>{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
}
