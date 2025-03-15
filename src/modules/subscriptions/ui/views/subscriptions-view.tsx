import { Separator } from "@/components/ui/separator";
import { SubscriptionsVideosSection } from "../sections/subscriptions-videos-section";

export const SubscriptionsView = () => {
  return (
    <div className="max-w-screen-md lg:max-w-[950px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6 relative mt-2">
      <div className="">
        <h1 className="font-bold text-[34px]">All subscriptions</h1>
      </div>

      <SubscriptionsVideosSection />
    </div>
  );
};
