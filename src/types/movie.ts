export interface Movie {
  id: number,
  title: string,
  originalTitle: string,
  overview: string,
  posterUrl: string,
  releaseDate: string,
  rating: GLfloat,
  genres: genres[],
}

type genres = "SF" | "드라마" | "미스터리" | "로맨스" | "판타지" | "범죄" | "스릴러" | "가족" | "액션"