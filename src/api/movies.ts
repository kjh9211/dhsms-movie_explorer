import type { Movie } from "../types/movie";

export async function fetchMovies(): Promise<Movie[] | any> {
  const data = await fetch("/data/movies.json");
  if (!data.ok) throw new Error("[Fetch] 영화 목록 불러오기 실패");
  const movies = (await data.json()) as Movie[];
  return Array.from({ length: 4000 }, (_, group) =>
    movies.map((movie) => ({
      ...movie,
      id: movie.id + group * 100,
      title: group ? `${movie.title} ${group + 1}` : movie.title,
    })),
  ).flat();
}
