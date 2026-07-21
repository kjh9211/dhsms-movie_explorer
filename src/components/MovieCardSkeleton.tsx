export function MovieCardSkeleton() {
  return (
    <article className="movie-card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-poster" />
      <div className="movie-info">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-line"></div>
        <div className="skeleton skeleton-meta"></div>
      </div>
    </article>
  );
}
