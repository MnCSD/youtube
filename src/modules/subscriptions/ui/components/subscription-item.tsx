import { UserAvatar } from "@/components/user-avatar";
import { SubscriptionButton } from "./subscription-button";
import { Skeleton } from "@/components/ui/skeleton";

interface SubscriptionItemProps {
  name: string;
  imageUrl: string;
  subscriberCount: number;
  onUnsubscribe: () => void;
  disabled: boolean;
}

export const SubscriptionItemSkeleton = () => {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="w-[134px] h-[134px] rounded-full" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-3 mt-1 w-20" />
          </div>
          <Skeleton className="h-8 w-36 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const SubscriptionItem = ({
  name,
  imageUrl,
  subscriberCount,
  onUnsubscribe,
  disabled,
}: SubscriptionItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <UserAvatar size={"sub"} name={name} imageUrl={imageUrl} />
      <div className="flex-1 ">
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-xl">{name}</h3>
            <p className="text-xs text-muted-foreground">
              {subscriberCount.toLocaleString()} subscribers
            </p>
          </div>

          <SubscriptionButton
            size={"lg"}
            onClick={(e) => {
              e.preventDefault();
              onUnsubscribe();
            }}
            disabled={disabled}
            isSubscribed
          />
        </div>
      </div>
    </div>
  );
};
