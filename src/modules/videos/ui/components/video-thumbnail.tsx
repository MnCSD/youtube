import { formatDuration } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { THUMBNAIL_FALLBACK } from "../../types";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoThumbnailProps {
  imageUrl?: string | null;
  duration: number;
  title: string;
  previewUrl?: string | null;
}

export const VideoThumbnailSkeleton = () => {
  return (
    <div className="relative w-full overflow-hidden transition-all group-hover:rounded-none rounded-xl aspect-video">
      <Skeleton className="size-full" />
    </div>
  );
};

export const VideoThumbnail = ({
  imageUrl,
  title,
  duration,
  previewUrl,
}: VideoThumbnailProps) => {
  return (
    <div className="relative group">
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ?? THUMBNAIL_FALLBACK}
          alt="Thumbnail"
          fill
          className="size-full object-cover group-hover:opacity-0"
        />
        <Image
          src={previewUrl ?? imageUrl ?? THUMBNAIL_FALLBACK}
          alt="Thumbnail"
          unoptimized={!!previewUrl}
          fill
          className="size-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="absolute bottom-2 right-2 px-1 py-0.5 rounded bg-black/80 text-white text-xs font-medium">
        {formatDuration(duration)}
      </div>
    </div>
  );
};
