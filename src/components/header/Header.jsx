// import React from "react";
// import header1 from "@/assets/images/header1.png";
// import header2 from "@/assets/images/header2.png";
// import header3 from "@/assets/images/header3.png";
// import header4 from "@/assets/images/header4.png";
// import logo from "@/assets/images/logo.png";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="bg-black text-white">
//       <div className="container mx-auto flex items-center justify-between px-8 py-4">
//         <div className="flex items-center">
//           <img src={logo} alt="Logo" className="w-16 h-auto" />
//         </div>

//         <nav className="flex items-center space-x-8 text-lg">
//           <Link
//             to={"/"}
//             className="flex items-center space-x-2 text-red-500 font-bold hover:text-red-400"
//           >
//             <img src={header1} alt="Header Icon 1" className="w-6 h-6" />
//             <span>Афиша</span>
//           </Link>
//           <Link
//             to={"/"}
//             className="flex items-center space-x-2 hover:text-red-500"
//           >
//             <img src={header2} alt="Header Icon 2" className="w-6 h-6" />
//             <span>Сеансы</span>
//           </Link>
//           <Link
//             to={"/"}
//             className="flex items-center space-x-2 hover:text-red-500"
//           >
//             <img src={header3} alt="Header Icon 3" className="w-6 h-6" />
//             <span>Билеты</span>
//           </Link>
//           <Link
//             to={"/"}
//             className="flex items-center space-x-2 hover:text-red-500"
//           >
//             <img src={header4} alt="Header Icon 4" className="w-6 h-6" />
//             <span>Поиск</span>
//           </Link>
//         </nav>

//         <div className="flex items-center space-x-6">
//           <div>
//             <select
//               className="bg-black text-white border border-gray-500 rounded px-2 py-1 focus:outline-none"
//               defaultValue="ru"
//             >
//               <option value="ru">Рус</option>
//               <option value="en">Eng</option>
//             </select>
//           </div>

//           <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500">
//             Войти
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react'




import { RiCoupon3Line } from "react-icons/ri";
import { MdOutlineVibration } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

import { IoTvSharp } from "react-icons/io5";
import React from "react";
import logo from "../../assets/images/logo.png";
import { BsBox2Fill } from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";
import { BiBookmarks } from "react-icons/bi";

const lang = [
  {
    label: "Eng",
    value: "en",
  },
  {
    label: "Rus",
    value: "ru",
  },
  {
    label: "Uzb",
    value: "uzb",
  },
];

const Header = () => {
  return (
    <div className="container flex flex-wrap items-center justify-around py-4">
      <div className="w-[112px] h-[36px]">
        <img className="w-full h-full" src={logo} alt="" />
      </div>
      <ul className="flex w-[250px] flex-wrap justify-between">
        <li className="flex flex-wrap flex-col items-center cursor-pointer">
          <IoTvSharp className="text-[20px] text-[#A1A1A1]" />
          <span className="text-[#A1A1A1]">Afisha</span>
        </li>
        <li className="flex flex-wrap flex-col items-center cursor-pointer">
          <MdOutlineVibration className="text-[20px] text-[#A1A1A1]" />
          <span className="text-[#A1A1A1]">Seans</span>
        </li>
        <li className="flex flex-wrap flex-col items-center cursor-pointer">
          <RiCoupon3Line className="text-[20px] text-[#A1A1A1]" />
          <span className="text-[#A1A1A1]">Ticket</span>
        </li>
        <li className="flex flex-wrap flex-col items-center cursor-pointer">
          <FiSearch className="text-[20px] text-[#A1A1A1]" />
          <span className="text-[#A1A1A1]">Search</span>
        </li>
      </ul>
      <div className="flex gap-2 items-center">
        <select className="h-full bg-slate-900 px-2 py-2 rounded-md text-white">
          {lang.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <button className="w-[180px] bg-red-700 text-white py-3 rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
