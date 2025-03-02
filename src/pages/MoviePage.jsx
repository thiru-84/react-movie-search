import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function MoviePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (movie?.imdbID) {
      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(
            `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=654ce072`
          );
          setMovieDetails(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchMovieDetails();
    }
  }, [movie]);

  if (!movieDetails) return <p className="text-white text-center"></p>;

  return (
    <div className="h-screen bg-zinc-900 px-4">
      <div className="py-6">
        <div className="flex flex-col text-white justify-center mx-auto max-w-5xl">
          <Link to="/">
            <button className="hover:text-violet-400 text-white pb-10 flex items-center gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>{" "}
              Back to Home Page
            </button>
          </Link>
          <div className="flex mx-auto">
            <img
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              className="h-[600px] rounded-lg"
            />
            <div className="ml-6 w-[50%]">
              <div className="flex gap-4 items-end">
                <h1 className="text-4xl font-bold">{movieDetails.Title}</h1>

                <p className="text-gray-400 text-lg flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                    />
                  </svg>

                  {movieDetails.Type === "movie" ? "Movie" : "Series"}
                </p>

                <p className="text-gray-400 text-md flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  {movieDetails.Year}
                </p>
                <p className="text-gray-400 text-md flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  {movieDetails.Runtime}
                </p>
              </div>
              <p className="text-gray-400 text-md my-3">{movieDetails.Genre}</p>

              <p className="inline-flex items-center gap-2 bg-yellow-500 rounded-full px-2.5 py-1.5 text-sm text-black w-fit my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
                IMDB Rating: {movieDetails.imdbRating}
              </p>
              <p className="pt-3">{movieDetails.Plot}</p>
              <p className="text-gray-400 text-md pt-5">
                Director: <span className="text-gray-300"> {movieDetails.Director}</span>
              </p>
              <p className="pt-2 text-gray-400">
                Actors: <span className="text-gray-300"> {movieDetails.Actors}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
