import twitter from "@assets/icons/links/twitter.svg"
import discord from "@assets/icons/links/discord.svg"
import youtube from "@assets/icons/links/youtube.svg"
import telegram from "@assets/icons/links/telegram.svg"

interface ISocials {
  image: string,
  alt: string
}

export const socials:ISocials[] = [
  {
    image: twitter,
    alt: "twitter"
  },
  {
    image: discord,
    alt: "discord"
  },
  {
    image: youtube,
    alt: "youtube"
  },
  {
    image: telegram,
    alt: "telegram"
  }
]