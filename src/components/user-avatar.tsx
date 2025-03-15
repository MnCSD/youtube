import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

const avatarVariants = cva("", {
  variants: {
    size: {
      default: "h-9 w-9",
      xs: "h-4 w-4",
      sm: "h-6 w-6",
      md: "h-8 w-8",
      lg: "h-10 w-10",
      sub: "h-[134px] w-[134px]",
      xl: "h-[160px] w-[160px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
  imageUrl: string;
  name: string;
  className?: string;
  onClick?: () => void;
}

export const UserAvatar = ({
  className,
  imageUrl,
  name,
  size,
  onClick,
}: UserAvatarProps) => {
  return (
    <Avatar
      className={cn(avatarVariants({ size }), className)}
      onClick={onClick}
    >
      <AvatarImage src={imageUrl} alt={name} />
    </Avatar>
  );
};
