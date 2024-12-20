// import React from "react";
// import footer1 from "@/assets/images/footer1.png";
// import footer2 from "@/assets/images/footer2.png";
// import footer3 from "@/assets/images/footer3.png";
// import footer4 from "@/assets/images/footer4.png";
// import footer5 from "@/assets/images/footer5.png";
// import footer6 from "@/assets/images/footer6.png";
// import footer7 from "@/assets/images/footer7.png";
// import footer8 from "@/assets/images/footer8.png";
// import footer10 from "@/assets/images/footer10.png";
// import footer11 from "@/assets/images/footer11.png";
// import footer12 from "@/assets/images/footer12.png";
// import footer13 from "@/assets/images/footer13.png";
// import footer14 from "@/assets/images/footer14.png";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="container bg-[#111111] mt-10 text-white py-8 rounded-lg">
//       <div className="container mx-auto flex flex-wrap justify-between items-start px-4">
//         <div className="flex flex-col items-start mb-6 md:mb-0">
//           <div className="mb-4">
//             <img src={footer1} alt="Logo" className="w-16 h-16" />
//           </div>

//           <div className="flex flex-col gap-2">
//             <Link to={"/"}>
//               <img src={footer2} alt="Google Play" className="h-12" />
//             </Link>
//             <Link to={"/"}>
//               <img src={footer3} alt="App Store" className="h-12" />
//             </Link>
//           </div>
//         </div>

//         <div className="mb-6 md:mb-0">
//           <h4 className="text-red-500 text-lg font-semibold mb-2">О нас</h4>
//           <ul className="space-y-2">
//             <li className="flex items-center gap-2">
//               <img src={footer4} alt="Icon" className="w-5 h-5" />
//               <Link to={"/"} className="hover:text-red-500">
//                 Публичная оферта
//               </Link>
//             </li>
//             <li className="flex items-center gap-2">
//               <img src={footer5} alt="Icon" className="w-5 h-5" />
//               <Link to={"/"} className="hover:text-red-500">
//                 Реклама
//               </Link>
//             </li>
//             <li className="flex items-center gap-2">
//               <img src={footer6} alt="Icon" className="w-5 h-5" />
//               <Link to={"/"} className="hover:text-red-500">
//                 F.A.Q
//               </Link>
//             </li>
//             <li className="flex items-center gap-2">
//               <img src={footer7} alt="Icon" className="w-5 h-5" />
//               <Link to={"/"} className="hover:text-red-500">
//                 Контакты
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="mb-6 md:mb-0">
//           <h4 className="text-red-500 text-lg font-semibold mb-2">Категории</h4>
//           <ul className="space-y-2">
//             <li className="flex items-center gap-2">
//               <img src={footer8} alt="Icon" className="w-5 h-5" />
//               <Link to={"/"} className="hover:text-red-500">
//                 Кино
//               </Link>
//             </li>
//             <li className="flex items-center gap-2">
//               <img src={footer10} alt="Icon" className="w-5 h-5" />
//               <Link to={"/"} className="hover:text-red-500">
//                 Театр
//               </Link>
//             </li>
//             <li className="flex items-center gap-2">
//               <img src={footer11} alt="Icon" className="w-5 h-5" />
//               <Link to={"/"} className="hover:text-red-500">
//                 Концерты
//               </Link>
//             </li>
//             <li className="flex items-center gap-2">
//               <img src={footer12} alt="Icon" className="w-5 h-5" />
//               <Link to={"/"} className="hover:text-red-500">
//                 Спорт
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="text-red-500 text-lg font-semibold mb-2">
//             Связаться с нами
//           </h4>
//           <p className="text-red-500 font-bold mb-4">+998 (95) 897-33-38</p>
//           <h4 className="text-white font-semibold mb-2">Социальные сети</h4>
//           <div className="flex space-x-4">
//             <Link to={"/"} className="hover:text-red-500">
//               <img src={footer13} alt="Instagram" className="w-6 h-6" />
//             </Link>
//             <Link to={"/"} className="hover:text-red-500">
//               <img src={footer14} alt="Telegram" className="w-6 h-6" />
//             </Link>
//             <Link to={"/"} className="hover:text-red-500">
//               <img src={footer12} alt="YouTube" className="w-6 h-6" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  MdLocalMovies,
  MdTheaterComedy,
  MdSportsSoccer,
  MdEvent,
} from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { PiStarFour } from "react-icons/pi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import logo from "../../assets/images/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-10 mt-24">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex space-x-2 items-center mb-4">
            <div className="">
              <img
                src={logo}
                alt="logo"
                className="w-[55px] h-9 cursor-pointer hover:opacity-75"
              />
            </div>
          </div>
          <div className="mb-4">
            <a href="#" className="block mb-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36 cursor-pointer hover:opacity-75"
              />
            </a>
            <a href="#" className="block">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-36 cursor-pointer hover:opacity-75"
              />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About us</h3>
          <ul>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <IoDocumentTextSharp className="text-red-500 mr-2" />
              Public offer
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <PiStarFour className="text-red-500 mr-2" />
              Advertising
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <FaRegCircleQuestion className="text-red-500 mr-2" />
              F.A.Q
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer flex items-center">
              <FiPhone className="text-red-500 mr-2" />
              Contacts
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <MdLocalMovies className="text-red-500 mr-2" /> Movie
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <MdTheaterComedy className="text-red-500 mr-2" /> Theatre
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <MdEvent className="text-red-500 mr-2" /> Concerts
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer flex items-center">
              <MdSportsSoccer className="text-red-500 mr-2" /> Sport
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact us</h3>
          <p className="text-red-500 mb-4 cursor-pointer hover:underline hover:text-red-600">
            +998 (95) 897-33-38
          </p>
          <h3 className="text-lg font-semibold mb-3">Social media</h3>
          <div className="flex space-x-4">
            <FaInstagram className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
            <FaFacebookF className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
            <FaYoutube className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
