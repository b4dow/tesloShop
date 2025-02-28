"use client";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { LinkSide } from "./components";
import { useUIStore } from "@/store";
import clsx from "clsx";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  const closeMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <div>
      {/* Background back */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm"
        ></div>
      )}

      {/* SideMenu */}
      <nav
        //TODO: efecto de slide
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadw-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          },
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-14 ">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 border-gray-20 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}
        <LinkSide
          title="Perfil"
          href="/"
          icon={<IoPersonOutline size={30} />}
        />

        <LinkSide
          title="Ordenes"
          href="/"
          icon={<IoTicketOutline size={30} />}
        />
        <LinkSide
          title="Ingresar"
          href="/"
          icon={<IoLogInOutline size={30} />}
        />
        <LinkSide title="Salir" icon={<IoLogOutOutline size={30} />} href="/" />

        {/* Line Separator */}
        <div className="w-full h-px bg-gray-300 my-10" />
        <LinkSide
          title="Productos"
          icon={<IoShirtOutline size={30} />}
          href="/"
        />
        <LinkSide
          title="Ordenes"
          icon={<IoTicketOutline size={30} />}
          href="/"
        />
        <LinkSide
          title="Usuarios"
          icon={<IoPeopleOutline size={30} />}
          href="/"
        />
      </nav>
    </div>
  );
};
