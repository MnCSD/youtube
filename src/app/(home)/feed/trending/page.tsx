import { HydrateClient, trpc } from "@/trpc/server";
import { DEFAULT_LIMIT } from "@/constants";
import { TrendingView } from "@/modules/home/ui/views/trending-view";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ categoryId?: string }>;
}
const Page = async () => {
  void trpc.videos.getTrending.prefetchInfinite({
    limit: DEFAULT_LIMIT,
  });

  return (
    <HydrateClient>
      <TrendingView />
    </HydrateClient>
  );
};

export default Page;
