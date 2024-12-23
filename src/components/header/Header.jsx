import { RiCoupon3Line } from "react-icons/ri";
import { MdOutlineVibration } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdMovie } from "react-icons/md";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { IoTvSharp } from "react-icons/io5";
import React from "react";
import logo from "../../assets/images/logo.png";
import { BsBox2Fill } from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";
import { BiBookmarks } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Home from "@/pages/home/Home";
import AllMovies from "@/pages/allMovies/AllMovies";
import Saved from "@/pages/saved/Saved";
import Search from "@/pages/search/Search";

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
    <header className="bg-black">
      <div className="container flex flex-wrap items-center justify-around py-4">
        <div className="w-[112px] h-[36px]">
          <NavLink to={"/"}>
            {" "}
            <img className="w-full h-full" src={logo} alt="" />
          </NavLink>
        </div>
        <ul className="flex w-[250px] flex-wrap justify-between max-[650px]:fixed max-[650px]:bottom-0 max-[650px]:left-0 max-[650px]:bg-black max-[650px]:w-full max-[650px]:justify-evenly max-[650px]:z-50">
          <NavLink to={"/"}>
            <li className="flex flex-wrap flex-col items-center cursor-pointer max-[650px]:py-1 max-[650px]:text-[12px]">
              <IoTvSharp className="text-[20px] text-[#A1A1A1]" />
              <span className="text-[#A1A1A1]">Home</span>
            </li>
          </NavLink>
          <NavLink to={"/movies"}>
            <li className="flex flex-wrap flex-col items-center cursor-pointer max-[650px]:py-1 max-[650px]:text-[12px]">
              <MdMovie className="text-[20px] text-[#A1A1A1]" />
              <span className="text-[#A1A1A1]">Movies</span>
            </li>
          </NavLink>
          <NavLink to={"saved"}>
            <li className="flex flex-wrap flex-col items-center cursor-pointer max-[650px]:py-1 max-[650px]:text-[12px]">
              <BsFillBookmarkPlusFill className="text-[20px] text-[#A1A1A1]" />
              <span className="text-[#A1A1A1]">Saved</span>
            </li>
          </NavLink>
          <NavLink to={"/search"}>
            <li className="flex flex-wrap flex-col items-center cursor-pointer max-[650px]:py-1 max-[650px]:text-[12px]">
              <FiSearch className="text-[20px] text-[#A1A1A1]" />
              <span className="text-[#A1A1A1]">Search</span>
            </li>
          </NavLink>
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
    </header>
  );
};

export default Header;
