import { useState } from "react";
interface MoviePosterProps {
  src: string;
  alt: string;
  eager?: boolean;
}

export function MoviePoster({ src, alt, eager = false }: MoviePosterProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );
  return (
    <div>
      {status === "loading" && (
        <div className="poster-placeholder" aria-hidden="true" />
      )}
      {status === "error" ? (
        <div className="poster-error" aria-label={alt}>
          이미지를 불러올 수 없습니다.
        </div>
      ) : (
        <img
          className={status === "loaded" ? "poster-loaded" : ""}
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  );
}
