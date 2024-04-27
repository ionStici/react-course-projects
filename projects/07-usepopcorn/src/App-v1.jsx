import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./data/tempData";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/MainComp";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import Box from "./components/Box";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
