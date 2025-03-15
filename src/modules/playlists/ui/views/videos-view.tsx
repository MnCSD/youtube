import { Separator } from "@/components/ui/separator";
import { HistoryVideosSection } from "../sections/history-videos-section";
import { PlaylistHeaderSection } from "../sections/playlist-header-section";
import { VideosSection } from "../sections/videos-section";

interface VideosViewProps {
  playlistId: string;
}

export const VideosView = ({ playlistId }: VideosViewProps) => {
  return (
    <div className="max-w-screen-md lg:max-w-[1300px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6 relative">
      <PlaylistHeaderSection playlistId={playlistId} />

      <VideosSection playlistId={playlistId} />
    </div>
  );
};
