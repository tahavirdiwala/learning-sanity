"use client";
import Image from "next/image";

export interface IHeroSection {
  title: string;
  subheadline: string;
  backgroundImage: {
    asset: {
      url: string;
    };
  };
}

export default function Hero({ hero }: { hero: IHeroSection }) {
  return (
    <section className="h-[60vh] relative flex flex-col justify-center items-center text-white">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={hero.backgroundImage.asset.url}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="bg-black/40 absolute inset-0" />
      </div>
      <div className="relative text-center space-y-4 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{hero.title}</h1>
        <p className="max-w-xl mx-auto text-base md:text-lg">
          {hero.subheadline}
        </p>
      </div>
    </section>
  );
}
