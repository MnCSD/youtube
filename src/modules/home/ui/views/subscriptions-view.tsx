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
