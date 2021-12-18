// libraries, pages, components
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "../img/user.png";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

function MovieDetail({ pathId }) {
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  const img_base_url = "https://image.tmdb.org/t/p/w500/";

  const { movie, isLoading, review, recommendation } = useSelector(
    (state) => state.detail
  );
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <motion.h2 layoutId={`title ${pathId}`}>{movie.title}</motion.h2>
            <p>{movie.original_language}</p>
            <h4>{movie.overview}</h4>
            <Stats>
              <p>Popularity - {movie.popularity}</p>
              <p>Vote Count - {movie.vote_count}</p>
              <p>Vote Percentage - {movie.vote_average * 10}%</p>
            </Stats>
            <Gallery>
              <Media>
                <img
                  src={`${img_base_url}` + movie.poster_path}
                  alt="movie pic"
                />
              </Media>
            </Gallery>
            <Info>
              <a href={`${movie.homepage}`} target="_blank" rel="noreferrer">
                <u>Homepage</u>
              </a>
              <p>Release Date - {movie.release_date}</p>
              <p>Duration - {movie.runtime} mins</p>
              <p>Budget - ${movie.budget}</p>
              <p>Revenue - ${movie.revenue}</p>
            </Info>
            <Genre>
              Genres -
              {movie.genres.map((genre) => (
                <ul key={genre.id}>{genre.name}</ul>
              ))}
            </Genre>
            <Review>
              <h2>Reviews</h2>
              {review.results.map((review) => (
                <div key={review.id}>
                  <p className="username">{review.author_details.username}</p>
                  <Logo>
                    <img src={user} alt="user"></img>
                  </Logo>
                  <p>
                    <u>Rating -</u> {review.author_details.rating} /10
                  </p>
                  <p>
                    <u>Comment -</u> {review.content}
                  </p>
                </div>
              ))}
            </Review>
            <Recommendations>
              <h2>Similar Movies</h2>
              {recommendation.results.slice(0, 5).map((recommendation) => (
                <div key={recommendation.id}>
                  <MovieRecommendations>
                    <p className="title">{recommendation.title}</p>
                    <img
                      src={`${img_base_url}` + recommendation.poster_path}
                      alt="movie"
                    ></img>
                    <p>
                      <u>Release Date -</u> {recommendation.release_date}
                    </p>
                    <p>
                      <u>Overview -</u> {recommendation.overview}
                    </p>
                  </MovieRecommendations>
                </div>
              ))}
            </Recommendations>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 1;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  margin-top: 1rem;
  text-align: center;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Gallery = styled(motion.div)`
  img {
    margin: 1rem 0rem;
  }
`;

const Genre = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    width: "60vw";
    height: 20px;
    margin: 1rem;
    padding: 3px;
    background-color: #daf7a6;
    display: "flex";
    flex-direction: "row";
  }
`;

const Review = styled(motion.div)`
  color: black;
  p {
    font-size: 10px;
  }
  .username {
    font-weight: bold;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

const Recommendations = styled(motion.div)`
  color: black;
  .title {
    font-weight: bold;
  }
  img {
    height: 15rem;
    width: 15rem;
  }
`;

const MovieRecommendations = styled(motion.div)`
  .title {
    font-weight: bold;
  }
  img {
    height: 15rem;
    widht: 15rem;
  }
  p {
    font-size: 16px;
  }
`;

export default MovieDetail;
