import { MovieGridSkeleton } from './MovieGridSkeleton'
export function PageLoadingFallback(){return <section className="content" aria-busy="true" aria-label="페이지를 불러오는 중"><div className="skeleton skeleton-heading" aria-hidden="true"/><MovieGridSkeleton/></section>}
