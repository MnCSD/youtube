import Image from "next/image";
import { CategoriesSection } from "../sections/categories-section";
import { HomeVideosSection } from "../sections/home-videos-section";
import { TrendingVideosSection } from "../sections/trending-videos-section";
import { Separator } from "@/components/ui/separator";
import { SubscribedVideoSection } from "../sections/subscribed-videos-section";

export const SubscriptionsView = () => {
  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6 relative">
      <div className="">
        <h1 className="font-bold text-xl">Latest</h1>
      </div>

      <div className="">
        <SubscribedVideoSection />
      </div>
    </div>
  );
};
