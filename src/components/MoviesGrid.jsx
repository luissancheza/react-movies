import styles from "./MoviesGrid.module.css";

import { MovieCard } from "./MovieCard";
// import movies from "./movies.json";
import { get } from "../utils/httpClient";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function MoviesGrid({search}) {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const ruta = search 
    ? "search/movie/?query=" + search + "&page=" + page 
    : "discover/movie?page=" + page;
    get(ruta).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if(!isLoading && movies.length === 0){
    return <Empty/>
  }
  
  return (
    <InfiniteScroll
    dataLength={movies.length}
    hasMore={hasMore}
    next={() => setpage((prevPage) => prevPage +1)}
    loader = {<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
