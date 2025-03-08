import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface SubscriptionButtonProps {
  onClick: ButtonProps["onClick"];
  isSubscribed: boolean;
  disabled: boolean;
  className?: string;
  size?: ButtonProps["size"];
}

export const SubscriptionButton = ({
  onClick,
  isSubscribed,
  disabled,
  className,
  size,
}: SubscriptionButtonProps) => {
  return (
    <Button
      size={size}
      className={cn("rounded-full", className)}
      onClick={onClick}
      disabled={disabled}
      variant={isSubscribed ? "secondary" : "default"}
    >
      {isSubscribed ? "Unsubscribe" : "Subscribe"}
    </Button>
  );
};
