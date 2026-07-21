import { useEffect, useRef } from "react";

interface UseInfinityScrollOption {
  hasMore: boolean;
  onLoadMore: () => void;
}

export function useInfiniteSeroll({
  hasMore,
  onLoadMore,
}: UseInfinityScrollOption) {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || !hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) onLoadMore();
      },
      { rootMargin: "200px" },
    );
  }, [hasMore, onLoadMore]);
  return loadMoreRef;
}
