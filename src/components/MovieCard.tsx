import type { Movie } from '../types/movie'
interface MovieCardProps { movie: Movie }
export function MovieCard({ movie }: MovieCardProps) {
  return <article className="movie-card">
    <img src={`${movie.posterUrl}`} alt={`${movie.title} 포스터`} />
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <p>{movie.originalTitle}</p>
      <div className="movie-meta">
        <span>{movie.releaseDate.slice(0, 4)}</span>
        <span>★ {movie.rating}</span>
      </div>
      <p className="genres">{movie.genres.slice(0, 2).join(' · ')}</p>
    </div>
  </article>
}