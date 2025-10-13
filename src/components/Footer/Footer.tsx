import * as React from "react";
import Logo from "@components/ui/Logo/Logo.tsx";
import {footerLinks} from "@components/Footer/footer.data.ts";
import Socials from "@components/ui/Socials/Socials.tsx";
import BaseLink from "@components/ui/BaseLink/BaseLink.tsx";

const Footer: React.FC = () => {
  return (
    <footer className={"bg-purple-400 text-white font-dmmono px-10 py-7 md:px-20 md:py-14 lg:px-28 lg:py-20 xl:px-35 xl:py-25"}>
      <div className={"container max-w-290 flex gap-7 w-full mx-auto flex-col xl:flex-row xl:gap-4 sm:justify-between"}>
        <div className={"flex flex-col justify-between gap-4 items-start"}>
          <Logo/>
          <p className={" leading-5 text-xs"}>©{new Date().getFullYear()} All rights reserved</p>
        </div>
        <nav>
          <ul
            className={"grid grid-cols-1 gap-y-7 xl:gap-x-15 2xl:gap-x-25 md:grid-cols-2"}
          >
            {footerLinks.map((link) => (
              <li key={link}>
                <BaseLink link={link}/>
              </li>
            ))}
          </ul>
        </nav>
        <div className={"text-xs leading-4 flex flex-col gap-7 items-start"}>
          <p className={"my-0"}>Powered by Webflow</p>
          <p>Developed by Anastasiia G.</p>
        </div>
        <Socials/>
      </div>
    </footer>
  )
}

export default Footer