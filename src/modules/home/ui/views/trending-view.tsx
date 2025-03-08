import Image from "next/image";
import { CategoriesSection } from "../sections/categories-section";
import { HomeVideosSection } from "../sections/home-videos-section";
import { TrendingVideosSection } from "../sections/trending-videos-section";
import { Separator } from "@/components/ui/separator";

export const TrendingView = () => {
  return (
    <div className="max-w-[1300px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6 relative">
      <div className="flex items-center gap-x-4">
        <Image
          src={"/trending_animated.webp"}
          alt="Trending"
          width={72}
          height={72}
          className=""
        />
        <h1 className="font-bold text-3xl">Trending</h1>
      </div>

      <Separator className="w-screen right-0 top-36  absolute" />
      <div className="mt-14">
        <TrendingVideosSection />
      </div>
    </div>
  );
};
