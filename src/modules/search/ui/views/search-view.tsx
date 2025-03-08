import {} from "@/modules/home/ui/sections/categories-section";
import { CategoriesSection } from "../sections/categories-sections";
import { ResultsSection } from "../sections/results-section";

interface PageProps {
  query: string;
  categoryId: string | undefined;
}

export const SearchView = async ({ query, categoryId }: PageProps) => {
  return (
    <div className="max-w-[1300px] mx-auto mb-10 flex flex-col gap-y-6 px-4 pt-2.5">
      <CategoriesSection categoryId={categoryId} />
      <ResultsSection query={query} categoryId={categoryId} />
    </div>
  );
};
