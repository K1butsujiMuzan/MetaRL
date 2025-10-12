import artist1 from "@assets/images/artists/1.png"
import artist2 from "@assets/images/artists/2.png"
import artist3 from "@assets/images/artists/3.png"
import artist4 from "@assets/images/artists/4.png"
import artist5 from "@assets/images/artists/5.png"
import artist6 from "@assets/images/artists/6.png"
import artist7 from "@assets/images/artists/7.png"

interface IArtist {
  image: string,
  name: string
}

export const artists: IArtist[] = [
  {
    image: artist1,
    name: "Mark Popson"
  },
  {
    image: artist2,
    name: "Pete Bentz"
  },
  {
    image: artist3,
    name: "Daniela Youth"
  },
  {
    image: artist4,
    name: "Roman Gore"
  },
  {
    image: artist5,
    name: "Tonya"
  },
  {
    image: artist6,
    name: "Ivor"
  },
  {
    image: artist7,
    name: "Somae Petit"
  }
]