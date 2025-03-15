"use client";

import { Separator } from "@/components/ui/separator";
import { HistoryVideosSection } from "../sections/history-videos-section";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { PlaylistCreateModal } from "../components/playlists-create-modal";
import { useState } from "react";
import { PlaylistsVideosSection } from "../sections/playlists-videos-section";

export const PlaylistsView = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6 relative">
      <PlaylistCreateModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
      />
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="font-bold text-3xl">Playlists</h1>
        </div>
        <Button
          variant={"outline"}
          size={"icon"}
          className="rounded-full"
          onClick={() => setCreateModalOpen(true)}
        >
          <PlusIcon />
        </Button>
      </div>
      <PlaylistsVideosSection />
    </div>
  );
};
