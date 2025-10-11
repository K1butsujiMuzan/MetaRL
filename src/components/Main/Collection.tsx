import * as React from "react";
import wave1 from "@assets/images/waves/wave1.png"

const Collection: React.FC = () => {
  return(
    <section className={"flex flex-col justify-between lg:flex-row"}>
      <div className={"flex flex-col gap-10"}>
        <h2
          className={"text-2xl leading-10 uppercase font-audiowide max-w-88 md:text-38 md:leading-11.5"}
        >
          <span className={"text-white"}>wave nft</span>
          <span className={"text-gray-400"}> collection of 777</span>
        </h2>
        <img
          src={wave1}
          alt=""
          width="360"
          height="360"
          loading="lazy"
        />
      </div>
      <section className={"max-w-145 flex flex-col gap-8 items-start"}>
        <h3
          className={"text-toxic-400 text-xl leading-8 font-dmmono border-toxic-400 border-l-2 pl-5.5"}
        >
          META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.
        </h3>
        <div className={"text-white font-inter leading-6.5"}>
          <p>Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.</p>
          <p>Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.</p>
          <p>Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.</p>
        </div>
        <a
          href="#"
          className={"text-center font-dmmono text-white leading-4 px-9 pt-2.5 pb-4 border border-toxic-400 text-base hover:bg-toxic-400 hover:text-black active:bg-toxic-400 active:text-black active:scale-97 transition duration-300"}
        >
          Get One On OpenSea
        </a>
      </section>
    </section>
  )
}

export default Collection