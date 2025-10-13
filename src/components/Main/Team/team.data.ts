import team1 from "@assets/images/team/shaky.png"
import team2 from "@assets/images/team/baky.png"
import team3 from "@assets/images/team/vania.png"

interface ILinks {
  twitter: string,
  in: string
}

interface ITeam {
  image: string,
  name: string,
  job: string,
  links: ILinks,
  description: string,
}

export const teamData: ITeam[] = [
  {
    image: team1,
    name: "Shaky Lake",
    job: "Founder",
    links: {
      twitter: "#",
      in: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  },
  {
    image: team2,
    name: "Baky Hike",
    job: "Co-founder",
    links: {
      twitter: "#",
      in: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  },
  {
    image: team3,
    name: "Vania Do",
    job: "Producer",
    links: {
      twitter: "#",
      in: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  },
]