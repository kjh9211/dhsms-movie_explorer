import { MovieCardSkeleton } from "./MovieCardSkeleton";

interface MovieGridSkeletonProps {
  count?: number;
}
export function MovieGridSkeleton({ count = 8 }: MovieGridSkeletonProps) {
  return (
    <div className="movie-grid">
      {Array.from({ length: count }, (_, index) => {
        return <MovieCardSkeleton key={index} />;
      })}
    </div>
  );
}
