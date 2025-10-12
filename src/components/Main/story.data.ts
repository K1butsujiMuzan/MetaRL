import story1 from "@assets/images/story/story1.png"
import story2 from "@assets/images/story/story2.png"
import story3 from "@assets/images/story/story3.png"

export interface IStoryInformation {
  id: string,
  image: string,
  title: string,
  information: string[]
}

export const storyButtons: string[] = [
  "Our founders",
  "Partners",
  "The future"
]

export const storyInformation: IStoryInformation[] = [
  {
    id: "Our founders",
    image: story1,
    title: "META record label was founded by Shaky Lake and Baky Hike in 2020 business accelerator.",
    information: [
      "Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.",
      "Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.",
      "Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi."
    ]
  },
  {
    id: "Partners",
    image: story2,
    title: "META record label partners with visionary creators and industry innovators to shape the future of music.",
    information: [
      "Curabitur et ligula ut eros vehicula tristique. Vivamus efficitur magna in sapien ultrices, nec gravida justo tempor. Nulla facilisi. Sed euismod nisl id risus fermentum.",
      "Pellentesque habitant morbi tristique senectus et netus. Suspendisse potenti. Fusce volutpat arcu at metus lacinia, eget mollis lectus tincidunt. Proin sit amet consectetur magna.",
      "Vestibulum ante ipsum primis in faucibus orci luctus. Maecenas scelerisque turpis nec purus dignissim. Integer vel metus sit amet dolor cursus volutpat."
    ]
  },
  {
    id: "The future",
    image: story3,
    title: "META record label pioneers Web3 music ecosystems through blockchain technology and NFT integration.",
    information: [
      "Praesent commodo velit eu nisi suscipit, at aliquet magna venenatis. Quisque ac libero nec urna fermentum ultrices. Aliquam erat volutpat.",
      "Suspendisse rhoncus ipsum a purus tincidunt, vel blandit felis ultricies. Nulla facilisi. Cras convallis lectus sit amet augue vehicula.",
      "Donec sagittis eros eget diam lacinia, vitae malesuada risus finibus. Morbi sit amet nunc id quam pretium ultricies eu vel metus."
    ]
  },
]