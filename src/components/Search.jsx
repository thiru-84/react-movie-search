/* eslint-disable react/prop-types */
function Search({ setSearchTerm }) {
  return (
    <div>
      <div>
        <form className="max-w-md mx-auto pt-4">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none text-white/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            {/* bg-gray-800/70 */}
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-13 text-sm text-white border border-gray-600/40 
  rounded-full bg-black/70 placeholder-gray-200/50 shadow-2xl 
  focus:ring-2 focus:ring-purple-500/50 focus:outline-none transition"
              placeholder="Search Movies, Series..."
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
