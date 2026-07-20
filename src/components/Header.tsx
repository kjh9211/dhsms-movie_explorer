import { Link } from 'react-router-dom'
import { useMyListStore } from '../stores/useMyListStore'
export function Header(){const count=useMyListStore(state=>state.movies.length);return <header className="app-header"><Link className="logo" to="/">MOVIE EXPLORER</Link><Link className="secondary-button" to="/my-list">내 목록 {count}</Link></header>}
