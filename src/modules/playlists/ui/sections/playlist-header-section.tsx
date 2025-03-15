"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { trpc } from "@/trpc/client";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { toast } from "sonner";

interface PlaylistHeaderSectionProps {
  playlistId: string;
}

export const PlaylistHeaderSection = ({
  playlistId,
}: PlaylistHeaderSectionProps) => {
  return (
    <Suspense fallback={<PlaylistHeaderSectionSkeleton />}>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <PlaylistHeaderSectionSuspense playlistId={playlistId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const PlaylistHeaderSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-6 w-24" />
      <Skeleton className="h-4 w-32" />
    </div>
  );
};

const PlaylistHeaderSectionSuspense = ({
  playlistId,
}: PlaylistHeaderSectionProps) => {
  const [playlist] = trpc.playlists.getOne.useSuspenseQuery({ id: playlistId });
  const utils = trpc.useUtils();
  const router = useRouter();

  const remove = trpc.playlists.remove.useMutation({
    onSuccess: () => {
      toast.success("Playlist removed");
      utils.playlists.getMany.invalidate();
      router.push("/playlists");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <div className="flex justify-between items-center">
      <div className="">
        <h1 className="font-bold text-3xl">{playlist.name}</h1>
      </div>
      <Button
        variant="outline"
        size={"icon"}
        className="rounded-full"
        onClick={() => remove.mutate({ id: playlist.id })}
        disabled={remove.isPending}
      >
        <Trash2Icon />
      </Button>
    </div>
  );
};
