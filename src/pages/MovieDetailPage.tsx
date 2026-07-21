import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { movies } from "../data/movies";
import { NotFoundPage } from "./NotFoundPage";
export function MovieDetailPage() {
  const { movieId } = useParams();
  const movie = movies.find((item) => item.id === Number(movieId));
  const [isFavorite, setIsFavorite] = useState(false);
  if (!movie) return <NotFoundPage message="해당 영화를 찾을 수 없습니다." />;
  return (
    <section className="detail-page">
      <div
        className="detail-backdrop"
        style={{
          backgroundImage: `linear-gradient(90deg,#141414 15%,rgba(20,20,20,.75),#141414),url(${movie.posterUrl})`,
        }}
      />
      <div className="detail-content">
        <Link className="back-link" to="/">
          ← 목록으로 돌아가기
        </Link>
        <div className="detail-grid">
          <img src={movie.posterUrl} alt={`${movie.title} 포스터`} />
          <div>
            <p className="eyebrow">
              {movie.releaseDate} · {movie.genres.join(" · ")}
            </p>
            <h1>{movie.title}</h1>
            <p className="original-title">{movie.originalTitle}</p>
            <p className="rating">★ {movie.rating} / 10</p>
            <p className="overview">{movie.overview}</p>
            <button
              className="accent-button"
              type="button"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? "즐겨찾기 해제" : "즐겨찾기에 추가"}
            </button>
            <p className="state-note">
              즐겨찾기는 이 페이지에 머무는 동안만 유지됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
