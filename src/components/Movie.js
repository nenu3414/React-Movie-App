// libraries, pages, components
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";

function Movie({ name, released, image, popularity, vCount, vAvg, type, id }) {
  const stringPathId = id.toString();
  // load movie details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  let movies;
  if (type === "popular") {
    movies = (
      <>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <p>Popularity - {popularity}</p>
        <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} />
      </>
    );
  } else if (type === "top_rated") {
    movies = (
      <>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <p>Vote Count - {vCount}</p>
        <p>Vote Percentage - {vAvg * 10}%</p>
        <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} />
      </>
    );
  } else {
    movies = (
      <>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} />
      </>
    );
  }
  return (
    <StyledMovie
      onClick={loadDetailHandler}
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
    >
      <Link to={`/movie/${id}`}>{movies}</Link>
    </StyledMovie>
  );
}

const StyledMovie = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

export default Movie;
