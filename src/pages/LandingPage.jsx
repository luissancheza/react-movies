import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const debounceSearch = useDebounce(search, 300);
  return (
    <div>
      <Search />
      <MoviesGrid key={debounceSearch} search={debounceSearch}/>
    </div>
  );
}
