import { useQuery } from '@tanstack/react-query'
import { fetchMovies } from '../api/movies'
export function useMoviesQuery(){return useQuery({queryKey:['movies'],queryFn:fetchMovies})}
