import logo from "@assets/images/Logo.svg"
import {links, socials} from "./header.data.ts";
import * as React from "react";

const Header: React.FC = () => {
  return (
    <header className={"bg-black px-4"}>
      <div className={"container mx-auto pt-12 pb-3 flex gap-x-10 items-center max-w-290"}>
        <a href={"#"}>
          <img width={123} height={32} src={logo} alt={"logo"}/>
        </a>
        <div className={"flex justify-between flex-1 items-center"}>
          <nav>
            <ul className={"flex gap-x-10"}>
              {links.map((link, index) => (
                <li key={index}>
                  <a className={"text-white font-dmmono text-base leading-4 hover:text-[var(--color-lime)] transition-colors duration-300"} href={"#"}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={"flex gap-3"}>
            {socials.map((social, index) => (
              <a href={"#"} key={index}>
                <img src={social.image} alt={social.alt} width={40} height={40} className={"hover:scale-105 duration-300 active:scale-97"}/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header