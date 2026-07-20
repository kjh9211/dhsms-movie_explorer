import type { Movie } from '../types/movie'
import { Link } from 'react-router-dom'
import { MoviePoster } from './MoviePoster'
import { useMyListStore } from '../stores/useMyListStore'
interface MovieCardProps { movie: Movie }
export function MovieCard({movie}:MovieCardProps){const toggleMovie=useMyListStore(state=>state.toggleMovie);const saved=useMyListStore(state=>state.movies.some(item=>item.id===movie.id));return <article className="movie-card"><Link to={`/movies/${movie.id}`} aria-label={`${movie.title} 상세보기`}><MoviePoster src={movie.posterUrl} alt={`${movie.title} 포스터`}/><div className="movie-info"><h3>{movie.title}</h3><p>{movie.originalTitle}</p><div className="movie-meta"><span>{movie.releaseDate.slice(0,4)}</span><span>★ {movie.rating}</span></div><p className="genres">{movie.genres.slice(0,2).join(' · ')}</p></div></Link><button className="save-button" type="button" onClick={()=>toggleMovie(movie)}>{saved?'✓ 저장됨':'+ 내 목록'}</button></article>}
