import road1 from "@assets/images/roadmap/1.png"
import road2 from "@assets/images/roadmap/2.png"
import road3 from "@assets/images/roadmap/3.png"

export interface IRoadMap{
  id: number,
  isCompleted: boolean,
  title: string,
  advantages: string[],
  information: string,
  image: string
}

export const roadMapData: IRoadMap[] = [
  {
    id: 1,
    isCompleted: true,
    title: "Spring 2022 - pre launch",
    advantages: [
      "Website 1.2",
      "Discord community promotion",
      "MINTING WAVE NFTs"
    ],
    information: "WAVE NFTs will be 100% pre-minted and launched as an OpenOcean collection",
    image: road1
  },
  {
    id: 2,
    isCompleted: false,
    title: "Summer 2022 - GROWTH",
    advantages: [
      "Hiring for 10 positions in",
      "Partnerships with main Metaverse players",
      "Partnerships with WEB 2.0 music destribution"
    ],
    information: "Onboarding 100 new artists META Record Labels is holding the first screening of aspiring artists from the list of WAVE NFT holders",
    image: road2
  },
  {
    id: 3,
    isCompleted: false,
    title: "Summer 2022 - your new stage",
    advantages: [
      "Onboarding new partners",
      "First live concert in Sandjar",
      "Live concert in Decentrafield"
    ],
    information: "We secured dates for out artists to perform in front of the live audience of Metaverse. Check the concert schedule in our",
    image: road3
  },
]