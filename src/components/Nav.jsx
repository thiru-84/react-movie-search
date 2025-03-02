import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="bg-zinc-900 text-white py-6 px-4 sticky">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="flex gap-1 items-end justify-center">
              <div className="text-3xl">📽️</div>
              <div className="font-bold text-xl">
                Movie<span className="font-normal">Time</span>
              </div>
            </div>
          </Link>

          <div className="flex">
            <span>Created by <a href="https://github.com/thiru-84" className="underline hover:text-violet-300" target="_blank"> Thiru</a></span>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
