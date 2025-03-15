import { Separator } from "@/components/ui/separator";
import { HistoryVideosSection } from "../sections/history-videos-section";

export const HistoryView = () => {
  return (
    <div className="max-w-screen-md lg:max-w-[1300px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6 relative">
      <div className="">
        <h1 className="font-bold text-3xl">Watch history</h1>
      </div>

      <HistoryVideosSection />
    </div>
  );
};
