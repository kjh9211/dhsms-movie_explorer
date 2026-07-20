import { create } from 'zustand'
import type { Movie } from '../types/movie'
interface MyListState{movies:Movie[];toggleMovie:(movie:Movie)=>void;isSaved:(id:number)=>boolean;clearMovies:()=>void}
export const useMyListStore=create<MyListState>((set,get)=>({movies:[],toggleMovie:movie=>set(state=>({movies:state.movies.some(item=>item.id===movie.id)?state.movies.filter(item=>item.id!==movie.id):[...state.movies,movie]})),isSaved:id=>get().movies.some(movie=>movie.id===id),clearMovies:()=>set({movies:[]})}))
