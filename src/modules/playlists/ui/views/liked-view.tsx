import { Separator } from "@/components/ui/separator";
import { HistoryVideosSection } from "../sections/history-videos-section";
import { LikedVideosSection } from "../sections/liked-videos-section";

export const LikedView = () => {
  return (
    <div className="max-w-screen-md lg:max-w-[1300px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6 relative">
      <div className="">
        <h1 className="font-bold text-3xl">Liked videos</h1>
      </div>

      <LikedVideosSection />
    </div>
  );
};
