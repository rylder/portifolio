"use client";

import Image from "next/image";
import { LiHTMLAttributes, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../public/logo-rylder-oliveira.svg";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingUp = window.scrollY < lastScrollY;
      setIsVisible(isScrollingUp);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 flex w-full items-center justify-center bg-gray bg-opacity-30 p-8 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex w-full max-w-5xl items-center justify-between md:px-8">
        <Image src={Logo} alt="Logo" height={24} className="cursor-pointer" />
        <ul className="hidden items-center justify-evenly gap-8 md:flex">
          <NavItem route="#home" label="Home" />
          <NavItem route="#about" label="About" />
          <NavItem route="#services" label="Services" />
          <NavItem route="#projects" label="Projects" />
          <NavItem route="#contact" label="Contact" variant="primary" />
        </ul>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && isVisible && (
        <ul className="absolute left-0 right-0 top-full flex flex-col items-center bg-gray bg-opacity-30 py-4">
          <NavItem route="#home" label="Home" onClick={toggleMobileMenu} />
          <NavItem route="#about" label="About" onClick={toggleMobileMenu} />
          <NavItem
            route="#services"
            label="Services"
            onClick={toggleMobileMenu}
          />
          <NavItem
            route="#projects"
            label="Projects"
            onClick={toggleMobileMenu}
          />
          <NavItem
            route="#contact"
            label="Contact"
            variant="primary"
            onClick={toggleMobileMenu}
          />
        </ul>
      )}
    </nav>
  );
}

interface NavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  route: string;
  label: string;
  variant?: "primary";
}

function NavItem({ route, label, variant, ...props }: NavItemProps) {
  return (
    <li {...props}>
      <a
        href={route}
        className={
          variant &&
          "flex min-w-[8rem] items-center justify-center bg-green p-2 font-bold text-black"
        }
      >
        {label}
      </a>
    </li>
  );
}
