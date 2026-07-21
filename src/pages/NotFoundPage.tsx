import { Link } from 'react-router-dom'
interface NotFoundPageProps { message?:string }
export function NotFoundPage({message='요청하신 페이지를 찾을 수 없습니다.'}:NotFoundPageProps){return <section className="not-found"><strong>404</strong><h1>찾을 수 없습니다</h1><p>{message}</p><Link className="accent-button" to="/">홈으로 이동</Link></section>}
