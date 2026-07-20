import { useCallback,useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { SearchBar } from '../components/SearchBar'
import { MovieGrid } from '../components/MovieGrid'
import { MovieGridSkeleton } from '../components/MovieGridSkeleton'
import { QueryStatus } from '../components/QueryStatus'
import { fetchMovies } from '../api/movies'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
const PAGE_SIZE=8
export function HomePage(){const moviesQuery=useQuery({queryKey:['movies'],queryFn:fetchMovies});const [searchTerm,setSearchTerm]=useState('');const [visibleCount,setVisibleCount]=useState(PAGE_SIZE);const normalized=searchTerm.trim().toLowerCase();const filtered=(moviesQuery.data??[]).filter(movie=>`${movie.title} ${movie.originalTitle}`.toLowerCase().includes(normalized));const hasMore=visibleCount<filtered.length;const loadMore=useCallback(()=>setVisibleCount(count=>Math.min(count+PAGE_SIZE,filtered.length)),[filtered.length]);const loadMoreRef=useInfiniteScroll({hasMore,onLoadMore:loadMore});const changeSearch=(value:string)=>{setSearchTerm(value);setVisibleCount(PAGE_SIZE)};return <><section className="hero"><div><h1>오늘은 어떤 영화를 찾아볼까요?</h1><p>새로운 이야기와 오래 기억될 장면을 만나보세요.</p><SearchBar value={searchTerm} onChange={changeSearch} onReset={()=>changeSearch('')}/></div></section><section className="content">{!moviesQuery.isPending&&<QueryStatus isFetching={moviesQuery.isFetching} updatedAt={moviesQuery.dataUpdatedAt} onRefresh={()=>{void moviesQuery.refetch()}}/>}{moviesQuery.isPending?<MovieGridSkeleton/>:moviesQuery.isError?<div className="empty-state"><strong>영화를 불러오지 못했습니다.</strong><button onClick={()=>moviesQuery.refetch()}>다시 시도</button></div>:filtered.length===0?<div className="empty-state"><strong>{moviesQuery.data.length===0?'등록된 영화가 없습니다.':'검색 결과가 없습니다.'}</strong></div>:<><div className="section-heading"><h2>{normalized?`“${searchTerm.trim()}” 검색 결과`:'추천 영화'}</h2></div><MovieGrid movies={filtered.slice(0,visibleCount)}/>{hasMore?<div className="load-more" ref={loadMoreRef} aria-hidden="true"/>:<p className="end-message">모든 영화를 확인했습니다.</p>}</>}</section></>}
export default HomePage
