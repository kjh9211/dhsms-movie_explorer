import { Link } from 'react-router-dom'
import { useMyListStore } from '../stores/useMyListStore'
interface HeaderProps{onOpenSearch:()=>void}
export function Header({onOpenSearch}:HeaderProps){const count=useMyListStore(state=>state.movies.length);return <header className="app-header"><Link className="logo" to="/">MOVIE EXPLORER</Link><nav className="header-actions"><button className="secondary-button" onClick={onOpenSearch}>빠른 검색 Ctrl/⌘ K</button><Link className="secondary-button" to="/my-list">내 목록 {count}</Link></nav></header>}
