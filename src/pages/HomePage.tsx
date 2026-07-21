import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MovieGrid } from "../components/MovieGrid";
import { movies } from "../data/movies";
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredMovies = movies.filter((movie) =>
    `${movie.title} ${movie.originalTitle}`
      .toLowerCase()
      .includes(normalizedSearchTerm),
  );
  const resetSearch = () => setSearchTerm("");
  return (
    <>
      <section className="hero">
        <div>
          <h1>오늘은 어떤 영화를 찾아볼까요?</h1>
          <p>새로운 이야기와 오래 기억될 장면을 만나보세요.</p>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            onReset={resetSearch}
          />
        </div>
      </section>
      <section className="content">
        <div className="section-heading">
          <div>
            <h2>
              {normalizedSearchTerm
                ? `“${searchTerm.trim()}” 검색 결과`
                : "추천 영화"}
            </h2>
            {normalizedSearchTerm && (
              <p>{filteredMovies.length}개의 영화를 찾았습니다.</p>
            )}
          </div>
        </div>
        {filteredMovies.length > 0 ? (
          <MovieGrid movies={filteredMovies} />
        ) : (
          <div className="empty-state">
            <strong>검색 결과가 없습니다.</strong>
            <p>다른 검색어를 입력해보세요.</p>
            <button type="button" onClick={resetSearch}>
              검색 초기화
            </button>
          </div>
        )}
      </section>
    </>
  );
}
