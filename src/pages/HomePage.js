// libraries, pages, components
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/moviesAction";
import Movie from "../components/Movie";
import MovieDetail from "../components/MovieDetail";
import Nav from "../components/Nav";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";

function HomePage() {
  const img_base_url = "https://image.tmdb.org/t/p/w500/";

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);
  // get that data back
  const { popular, upcoming, top_rated, searched } = useSelector(
    (state) => state.movies
  );
  return (
    <div style={{ scrollBehavior: "smooth" }} className="movie">
      <Nav />
      <ul
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <li>
          <a href="#upcomingMovies">
            <p>Upcoming Movies</p>
          </a>
        </li>
        <li>
          <a href="#popularMovies">
            <p>Popular Movies</p>
          </a>
        </li>
        <li>
          <a href="#topRated">
            <p>Top Rated Movies</p>
          </a>
        </li>
      </ul>
      <MovieList variants={fadeIn} initial="hidden" animate="show">
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {pathId && <MovieDetail pathId={pathId} />}
          </AnimatePresence>
          {searched.length ? (
            <div className="searched">
              <h2>Searched Movies</h2>
              <Movies>
                {searched.map((movie) => (
                  <Movie
                    name={movie.title}
                    released={movie.release_date}
                    id={movie.id}
                    image={`${img_base_url}` + movie.poster_path}
                    key={movie.id}
                  />
                ))}
              </Movies>
            </div>
          ) : (
            ""
          )}

          <h2>Upcoming Movies</h2>
          <div id="upcomingMovies">
            <Movies>
              {upcoming.map((movie) => (
                <div>
                  <Movie
                    name={movie.title}
                    released={movie.release_date}
                    image={`${img_base_url}` + movie.poster_path}
                    type="upcoming"
                    id={movie.id}
                    key={movie.id}
                  />
                </div>
              ))}
            </Movies>
          </div>

          <h2>Popular Movies</h2>
          <div id="popularMovies">
            <Movies>
              {popular.map((movie) => (
                <div>
                  <Movie
                    name={movie.title}
                    released={movie.release_date}
                    image={`${img_base_url}` + movie.poster_path}
                    type="popular"
                    popularity={movie.popularity}
                    id={movie.id}
                    key={movie.id}
                  />
                </div>
              ))}
            </Movies>
          </div>

          <h2>Top Rated Movies</h2>
          <div id="topRated">
            <Movies>
              {top_rated.map((movie) => (
                <Movie
                  name={movie.title}
                  released={movie.release_date}
                  type="top_rated"
                  vCount={movie.vote_count}
                  vAvg={movie.vote_average}
                  image={`${img_base_url}` + movie.poster_path}
                  id={movie.id}
                  key={movie.id}
                />
              ))}
            </Movies>
          </div>
        </AnimateSharedLayout>
      </MovieList>
    </div>
  );
}

const MovieList = styled(motion.div)`
  padding: 0rem 3rem;
  h2 {
    padding: 5rem 0rem 3rem;
  }
`;

const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default HomePage;
