import { useCallback, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MovieGrid } from "../components/MovieGrid";
import { movies } from "../data/movies";
import { useInfiniteSeroll } from "../hooks/useInfiniteSeroll";
import { useQuery } from "@tanstack/react-query";

const PAGE_SIZE = 8;
const catalog = Array.from({ length: 4000 }, (_, group) =>
  movies.map((movie) => ({
    ...movie,
    id: movie.id + group * 100,
    title: group ? `${movie.title} ${group + 1}` : movie.title,
  })),
).flat();

export default function HomePage() {
  const moviesQuery = useQuery({ queryKey: ["movies"], })
  const [searchTerm, setSearchTerm] = useState("");
  const [visiableCount, setVisiableCount] = useState(PAGE_SIZE);
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredMovies = (moviesQuery.data??[]).filter((movie)=>
  `${movie.title} ${movie.originalTitle}`
.toLowerCase()
.includes(normalizedSearchTerm))

  const hasMore = visiableCount < filteredMovies.length;
  const loadMore = useCallback(
    () =>
      setVisiableCount((count) =>
        Math.min(count + PAGE_SIZE, filteredMovies.length),
      ),
    [filteredMovies.length],
  );

  const loadMoreRef = useInfiniteSeroll({ hasMore, onLoadMore: loadMore });

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
          <>
            <MovieGrid movies={filteredMovies.slice(0, visiableCount)} />
            {hasMore ? (
              <div className="load-more" ref={loadMoreRef} aria-hidden="true">
                다음 영화를 불러오는 중...
              </div>
            ) : (
              <p className="end-message">모든 영화를 확인했습니다.</p>
            )}
          </>
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
