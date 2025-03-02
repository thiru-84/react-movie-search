/* eslint-disable react/prop-types */
import Search from "../components/Search";
import { Link } from "react-router-dom";

function Home({ movies, setSearchTerm }) {
  return (
    <div
  className={`bg-zinc-900 ${movies.length <= 0 ? "h-screen" : "h-full"}`}
>



      <div
        className="bg-zinc-900 flex flex-col items-center relative h-full"
        style={{
          paddingTop: movies.length > 0 ? "3.5rem" : "9rem",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            What&apos;s on your mind <br /> to watch 📺 today...?
          </h1>
          <p className="text-white text-center italic opacity-50 pt-3 pb-3">
            &quot;1000+ movies and web series to watch&quot;
          </p>
        </div>
        <div className="w-full">
          <Search setSearchTerm={setSearchTerm} />
        </div>

        {movies.length <= 0 ? null : (
          <>
            <div className="px-4 mt-8 w-full">
              <div className="flex flex-col bg-black/20 rounded-lg">
                <p className="text-white opacity-50 p-3 border-b border-white/30 w-full">
                  Similar Search Results {movies.length}
                </p>

                <div className="grid grid-cols-5 gap-4 p-4 overflow-x-auto whitespace-nowrap">
                  {movies.map((movie) => (
                    <Link to="/MoviePage" state={{ movie }} key={movie.imdbID} onClick={() => console.log(movie)}>
                      <div className="border-1 p-0 border-gray-700 rounded-lg relative hover:border-violet-600 hover:shadow-xl h-[500px]">
                        <div className="relative z-10">
                          <p className="absolute py-1 px-3 bg-white rounded-full mt-2 ml-2 text-black text-sm">
                            {movie.Type === "movie" ? "Movie" : "Series"}
                          </p>
                        </div>

                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          className="w-full  h-full object-cover rounded-lg transition-transform duration-300"
                        />

                        <div className="absolute bottom-0 left-0 right-0 px-3 pb-2 pt-10 text-white bg-gradient-to-t from-black to-black/0 rounded-b-lg">
                          <h2 className="text-lg font-bold">
                            {movie.Title} <span>{movie.Runtime}</span>
                          </h2>
                          <p className="text-gray-300">{movie.Year}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
