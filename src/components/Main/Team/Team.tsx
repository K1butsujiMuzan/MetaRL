import * as React from "react";
import {teamData} from "@components/Main/Team/team.data.ts"
import twitter from "@assets/icons/links/twitter.svg"
import linkedin from "@assets/icons/links/in.svg"

const Team: React.FC = () => {
  return (
    <section>
      <ul className={"flex flex-col items-center gap-4 lg:flex-row lg:justify-between"}>
        {teamData.map((team) => (
          <li
            className={"max-w-80 text-white flex flex-col gap-5.5 items-center text-center"}
            key={team.name}
          >
            <img
              src={team.image}
              alt={`Portrait of ${team.name}`}
              width="320"
              height="320"
              loading="lazy"
            />
            <div className={"font-dmmono text-xl leading-5 uppercase"}>{team.name}</div>
            <div className={"font-dmmono text-xs leading-3 text-toxic-400 uppercase tracking-widest"}>{team.job}</div>
            <ul className={"flex gap-3"}>
              <li>
                <a
                  href={team.links.twitter}
                >
                  <img
                    className={"hover:scale-105 duration-300 active:scale-97"}
                    src={twitter}
                    alt="Twitter"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a
                  href={team.links.in}
                >
                  <img
                    className={"hover:scale-105 duration-300 active:scale-97"}
                    src={linkedin}
                    alt="LinkedIn"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
            <p className={"text-xs leading-5 px-10 pb-4"}>{team.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Team