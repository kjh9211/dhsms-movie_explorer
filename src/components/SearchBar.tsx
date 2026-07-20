import { useState } from "react";
import { movies } from "../data/movies";
import type { Movie } from "../types/movie";

function search(query: string): Array<Movie> {
  return movies.filter(movie => (movie.id.toString() === query || movie.title.includes(query)))
};

export function SearchBar() {
  const [text, setText] = useState("");
  function onClick() {
    const { title, overview } = search(text)[0]
    alert(`제목: ${title} \n소개: ${overview}`);
    return;
  }
  return <div className="search-box">
    <label className="sr-only" htmlFor="movie-search">영화 검색</label>
    <input id="movie-search" type="search" placeholder="영화 제목을 입력하세요" onChange={e => setText(e.target.value)} value={text} />
    <button type="button" onClick={onClick}>검색</button>
  </div>
}