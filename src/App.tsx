import './App.css'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { MovieGrid } from './components/MovieGrid'
import { movies } from './data/movies'
function App(){return <div><Header/><main><section className="hero"><div><h1>오늘은 어떤 영화를 찾아볼까요?</h1><p>새로운 이야기와 오래 기억될 장면을 만나보세요.</p><SearchBar/></div></section><section className="content"><h2>추천 영화</h2><MovieGrid movies={movies}/></section></main></div>}
export default App
