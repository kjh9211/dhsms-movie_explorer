import type { Movie } from '../types/movie'
export async function fetchMovies():Promise<Movie[]>{const response=await fetch('/data/movies.json');if(!response.ok)throw new Error('영화 목록을 불러오지 못했습니다.');const movies=await response.json() as Movie[];return Array.from({length:4},(_,group)=>movies.map(movie=>({...movie,id:movie.id+group*100,title:group?`${movie.title} ${group+1}`:movie.title}))).flat()}
