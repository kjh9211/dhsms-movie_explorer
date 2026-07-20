import { MovieGrid } from '../components/MovieGrid'
import { useMyListStore } from '../stores/useMyListStore'
export function MyListPage(){const movies=useMyListStore(state=>state.movies);const clear=useMyListStore(state=>state.clearMovies);return <section className="content"><div className="section-heading"><h1>내 목록</h1>{movies.length>0&&<button className="secondary-button" onClick={clear}>모두 지우기</button>}</div>{movies.length?<MovieGrid movies={movies}/>:<div className="empty-state"><strong>저장한 영화가 없습니다.</strong><p>영화 카드에서 내 목록에 추가해보세요.</p></div>}</section>}
export default MyListPage
