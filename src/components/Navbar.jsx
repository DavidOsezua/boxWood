import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import LogoComponent from "./LogoComponent";
import { navLinks } from "../Data/data";
import { Hamburger, Phone } from "./SvgComponents";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";
import { logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className={styles.navbar}>
      <nav className={styles.navContainer}>
        {/*************  NavLogo ******************/}
        <NavLink to="/">
          <div className={styles.navLogo}>
            <img src={logo} className="w-[200px]" />
          </div>
        </NavLink>

        {/******************  Menu Items *********************/}
        <ul className={`${styles.navMenu} ${toggle && styles.showMenu} `}>
          {/********************* Menu close button *******************/}

          <button onClick={toggleHandler} className={styles.closeToggle}>
            <FaTimes className={`text-[1.5rem] text-[#000]`} />
          </button>

          {/********************* Menu Lists *******************/}

          {navLinks.map((navLink) => (
            <li
              className={styles.navItems}
              key={navLink.link}
              onClick={toggleHandler}
            >
              <NavLink to={navLink.path} className={`${styles.link}`}>
                {navLink.link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={`  ${styles.desktop} `}>
          <div className={`flex gap-3 items-center`}>
            <Phone />

            <NavLink to={"/contact"}>
              <Button text={`Get Started`} radius={`rounded-md`} />
            </NavLink>
          </div>
        </div>

        <button className={`${styles.toggle}`} onClick={toggleHandler}>
          <Hamburger />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
